import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email({ message: "Invalid e=mail" }),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
