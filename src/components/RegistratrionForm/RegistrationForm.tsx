import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegistrationFormData, validationSchema } from "./type";
import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { useState } from "react";

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <form className="flex flex-col gap-2">
          <h1>User base info</h1>
          <Input
            label="Username"
            {...register("username")}
            error={errors.username}
          ></Input>
          <Input
            label="Password"
            {...register("password")}
            error={errors.password}
            type="password"
          ></Input>
          <Input
            label="email"
            {...register("email")}
            type="email"
            error={errors.email}
          ></Input>
          <Button label="Next" onClick={nextStep}></Button>
        </form>
      )}
      {step === 2 && (
        <form className="flex flex-col gap-2">
          <h1>User personal indo</h1>
          <Input label="Name" {...register("name")} error={errors.name}></Input>
          <Input
            label="Surname"
            {...register("surname")}
            error={errors.surname}
          ></Input>
          <Button label="Back" onClick={prevStep}></Button>
          <Button label="Next" onClick={nextStep}></Button>
        </form>
      )}
      {step === 3 && (
        <form className="flex flex-col gap-2">
          <h1>User Hobbies</h1>

          <Button label="Back" onClick={prevStep}></Button>
          <Button label="Next" onClick={nextStep}></Button>
        </form>
      )}
      {step === 4 && (
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleRegistrationForm)}
        >
          <h1>Result</h1>

          <Button label="Back" onClick={prevStep}></Button>
          <Button label="Send" type="submit"></Button>
        </form>
      )}
    </div>
  );
};

