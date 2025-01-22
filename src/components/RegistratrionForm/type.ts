import { z } from "zod";

export const validationSchema = z.object({
  username: z.string().min(5, "Minimum 5 letter for username"),
  password: z.string().min(5, "Minimum 5 letter for password"),
  email: z.string().email({ message: "Invalid e=mail" }),
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
