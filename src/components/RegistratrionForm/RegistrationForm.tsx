import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegistrationFormData, validationSchema } from "./type";
import { Input } from "../../ui/Input";
import { Button } from "../../ui";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });
  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleRegistrationForm)}
    >
      <Input label="Name" {...register("name")} error={errors.name}></Input>
      <Input
        label="Surname"
        {...register("surname")}
        error={errors.surname}
      ></Input>
      <Input
        label="email"
        {...register("email")}
        type="email"
        error={errors.email}
      ></Input>
      <Button label="Send" type="submit"></Button>
    </form>
  );
};
