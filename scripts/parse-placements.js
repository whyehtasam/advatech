const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const excelPath = path.join(__dirname, '../public/placements/Candidate Placed List updated.xlsx');
const workbook = XLSX.readFile(excelPath);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const data = XLSX.utils.sheet_to_json(worksheet);

// Get all image files
const imagesDir = path.join(__dirname, '../public/placements/Placed Candidate with Salary');
const imageFiles = fs.readdirSync(imagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
});

// Helper function to normalize names for matching
function normalizeName(name) {
  if (!name) return '';
  return name.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// Match images with data
const placements = data.map((row, index) => {
  // Try to find matching image
  let imagePath = null;
  const studentName = row['Canididate Name'] || row['Candidate Name'] || row['Student Name'] || row['Name'] || '';
  
  if (studentName) {
    const normalizedName = normalizeName(studentName);
    const matchedImage = imageFiles.find(img => {
      const imgName = normalizeName(path.parse(img).name);
      return imgName.includes(normalizedName) || normalizedName.includes(imgName);
    });
    
    if (matchedImage) {
      imagePath = `/placements/Placed Candidate with Salary/${matchedImage}`;
    }
  }

  // Extract package/salary - handle different formats
  let packageAmount = 0;
  const salary = row['Salary'] || row['Package'] || row['CTC'] || row['Annual Package'] || '';
  if (salary) {
    // Extract numbers from string (e.g., "6.4 LPA" -> 640000)
    const match = salary.toString().match(/([\d.]+)/);
    if (match) {
      const num = parseFloat(match[1]);
      // If it's in Lakhs (LPA), multiply by 100000
      if (salary.toString().toLowerCase().includes('l') || salary.toString().toLowerCase().includes('lpa')) {
        packageAmount = Math.round(num * 100000);
      } else {
        packageAmount = Math.round(num);
      }
    }
  }

  // Extract year from date or use current year
  let year = new Date().getFullYear();
  const dateField = row['Date'] || row['Placement Date'] || row['Joining Date'] || '';
  if (dateField) {
    const date = new Date(dateField);
    if (!isNaN(date.getTime())) {
      year = date.getFullYear();
    }
  }

  // Determine course based on designation
  const designation = row['Designation'] || '';
  let course = 'Professional Training';
  if (designation.toLowerCase().includes('bim')) {
    course = 'BIM Training';
  } else if (designation.toLowerCase().includes('cad')) {
    course = 'AutoCAD Professional Training';
  } else if (designation.toLowerCase().includes('revit')) {
    course = 'Revit Architecture Training';
  }

  return {
    id: `placement-${index + 1}`,
    studentName: studentName || `Student ${index + 1}`,
    course: row['Course'] || course,
    company: row['Client Name'] || row['Company'] || row['Employer'] || 'Company',
    role: row['Designation'] || row['Role'] || row['Position'] || 'Professional',
    package: packageAmount || 300000, // Default to 3L if not found
    year: year,
    verified: true,
    studentImage: imagePath,
  };
}).filter(p => p.studentName && p.studentName !== `Student ${p.id.split('-')[1]}`);

// Save to JSON file
const outputPath = path.join(__dirname, '../data/placements-data.json');
fs.writeFileSync(outputPath, JSON.stringify(placements, null, 2));

console.log(`✅ Parsed ${placements.length} placements`);
console.log(`📁 Saved to ${outputPath}`);
console.log(`\nSample data:`, placements.slice(0, 3));
