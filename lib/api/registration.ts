import { RegistrationFormData } from "@/data/types";

export async function submitRegistration(data: RegistrationFormData): Promise<{
  success: boolean;
  message: string;
  registrationId?: string;
}> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/registration', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // return response.json();
  
  // Mock response
  console.log("Registration submitted:", data);
  return Promise.resolve({
    success: true,
    message: "Registration submitted successfully. We'll contact you soon!",
    registrationId: `REG-${Date.now()}`,
  });
}

