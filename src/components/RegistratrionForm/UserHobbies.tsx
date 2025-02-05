import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { StepWithArrayProps } from "./type";



const MAX_HOBBIES = 5;
export const UserHobbies = ({ register, errors, fields, append, remove, nextStep, prevStep } : StepWithArrayProps) => (
  <form className="flex flex-col gap-2">
    <h1 className="text-2xl text-white strong m-auto py-4 lg:text-4xl">User hobbies</h1>
    {fields.map((field, index) => (
      <div key={field.id} className="flex flex-col">
        <Input label={`Hobby ${index + 1}`} {...register(`hobbies.${index}.hobby`)} error={errors.hobbies?.[index]?.hobby} />
        <Button label="Remove" type="button" onClick={() => remove(index)} className="bg-transparent border-0 border-transparent hover:bg-transparent" />
      </div>
    ))}
    <Button
      className="w-40 bg-lime-600 hover:bg-lime-700 lg:w-56"
      label="Add hobby"
      type="button"
      onClick={() => fields.length < MAX_HOBBIES ? append({ hobby: "" }) : alert(`You can only add up to ${MAX_HOBBIES} hobbies.`)}
    />
    <div className="flex justify-between my-2 lg:justify-end lg:gap-2">
      <Button label="Back" onClick={prevStep} />
      <Button label="Next" type="button" onClick={nextStep} />
    </div>
  </form>
);
