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
    trigger,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });
  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  const nextStep = async () => {
    let isValid = false;

    // Walidacja dla poszczególnych kroków
    if (step === 1) {
      isValid = await trigger(["username", "password", "email"]);
    } else if (step === 2) {
      isValid = await trigger(["name", "surname"]);
    }else if (step === 3) {
        isValid = true
      }

    // Jeśli dane są poprawne, przejdź do kolejnego kroku
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

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
          <Button label="Next" type="button" onClick={nextStep}></Button>
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
          <Button label="Next" type="button" onClick={nextStep}></Button>
        </form>
      )}
      {step === 3 && (
        <form className="flex flex-col gap-2">
          <h1>User Hobbies</h1>

          <Button label="Back" onClick={prevStep}></Button>
          <Button label="Next" type="button" onClick={nextStep}></Button>
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
