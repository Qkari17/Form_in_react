import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { StepProps } from "./type";

 export const UserPersonalInfo = ({ register, errors, nextStep, prevStep } : StepProps) => (
  <form className="flex flex-col gap-2">
    <h1 className="text-2xl text-white strong m-auto py-4">User personal info</h1>
    <Input label="Name" {...register("name")} error={errors.name} />
    <Input label="Surname" {...register("surname")} error={errors.surname} />
    <div className="flex justify-between my-2">
      <Button label="Back" onClick={prevStep} />
      <Button label="Next" type="button" onClick={nextStep} />
    </div>
  </form>
);
