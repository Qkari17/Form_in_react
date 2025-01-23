import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { RegistrationFormData, validationSchema } from "./type";
import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { useState } from "react";

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      hobbies: [{ hobby: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  const nextStep = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await trigger(["username", "password", "email"]);
    } else if (step === 2) {
      isValid = await trigger(["name", "surname"]);
    } else if (step === 3) {
      isValid = await trigger("hobbies");
    }

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };
  const MAX_HOBBIES = 5;
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
            label="Email"
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
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                label={`Hobby ${index + 1}`}
                {...register(`hobbies.${index}.hobby` as const)}
                error={errors.hobbies?.[index]?.hobby}
              />
              <Button
                label="Remove"
                type="button"
                onClick={() => remove(index)}
              />
            </div>
          ))}
          <Button
            label="Add Hobby"
            type="button"
            onClick={() => {
              if (fields.length < MAX_HOBBIES) {
                append({ hobby: "" });
              } else {
                alert(`You can only add up to ${MAX_HOBBIES} hobbies.`);
              }
            }}
          />

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
          <div className="p-4 border rounded">
      <h2>Form Summary:</h2>
      <ul>
        <li>
          <strong>Username:</strong> {watch("username")}
        </li>
        <li>
          <strong>Password:</strong> {watch("password")}
        </li>
        <li>
          <strong>Email:</strong> {watch("email")}
        </li>
        <li>
          <strong>Name:</strong> {watch("name")}
        </li>
        <li>
          <strong>Surname:</strong> {watch("surname")}
        </li>
        <li>
          <strong>Hobbies:</strong>
          <ul>
            {watch("hobbies")?.map((hobby, index) => (
              <li key={index}>{hobby.hobby}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>


          <Button label="Back" onClick={prevStep}></Button>
          <Button label="Send" type="submit"></Button>
        </form>
      )}
    </div>
  );
};
