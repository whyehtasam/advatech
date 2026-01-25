const XLSX = require('xlsx');
const path = require('path');

const excelPath = path.join(__dirname, '../public/placements/Candidate Placed List updated.xlsx');
const workbook = XLSX.readFile(excelPath);

console.log('Sheet Names:', workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
  console.log(`\n=== Sheet: ${sheetName} ===`);
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { defval: null });
  
  console.log(`Total rows: ${data.length}`);
  if (data.length > 0) {
    console.log('First row keys:', Object.keys(data[0]));
    console.log('First 3 rows:', JSON.stringify(data.slice(0, 3), null, 2));
  }
});
