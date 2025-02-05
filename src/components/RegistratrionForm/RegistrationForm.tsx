import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { RegistrationFormData, validationSchema } from "./type";

import { useState } from "react";
import { UserBaseInfo } from "./UserBaseInfo";
import { UserPersonalInfo } from "./UserPersonalInfo";
import { UserHobbies } from "./UserHobbies";
import { Result } from "./Result";
import { EndScreen } from "./EndScreen";

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
    setStep((prev) => prev + 1);
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
 
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className=" relative border px-10 py-5 bg-zinc-700 rounded-2xl flex justify-center max-w-96">
      <div className="absolute right-3 top-3 text-white text-lg"> {step}/5</div>
      {step === 1 && <UserBaseInfo register={register} errors={errors} nextStep={nextStep} />}
      {step === 2 && <UserPersonalInfo register={register} errors={errors} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <UserHobbies register={register} errors={errors} fields={fields} append={append} remove={remove} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Result watch={watch} handleSubmit={handleSubmit} handleRegistrationForm={handleRegistrationForm} prevStep={prevStep} />}
      {step === 5 && <EndScreen />}
    </div>
  );
};
