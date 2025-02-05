import { FieldArrayWithId, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  username: z.string().min(5, "Minimum 5 letter for username"),
  password: z.string().min(5, "Minimum 5 letter for password"),
  email: z.string().email({ message: "Invalid email" }),
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  hobbies: z
    .array(
      z.object({
        hobby: z.string().min(1, "Hobby is required"),
      })
    )
    .min(1, "At least one hobby is required"),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;

export interface StepProps {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  nextStep: () => void;
  prevStep?: () => void; // Opcjonalny dla 1. kroku
}

// Rozszerzony interfejs dla kroków z obsługą tablicy (hobbies)
export interface StepWithArrayProps extends StepProps {
  fields: FieldArrayWithId<RegistrationFormData, "hobbies", "id">[];
  append: UseFieldArrayAppend<RegistrationFormData, "hobbies">;
  remove: UseFieldArrayRemove;
}

// Rozszerzony interfejs dla podsumowania (ostatniego kroku)
export interface StepSummaryProps {
  watch: UseFormWatch<RegistrationFormData>;
  handleSubmit: UseFormHandleSubmit<RegistrationFormData>;
  handleRegistrationForm: (data: RegistrationFormData) => void;
  prevStep: () => void;
}