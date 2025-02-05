import { Input } from "../../ui/Input";
import { Button } from "../../ui";
import { StepProps } from "./type";

export const UserBaseInfo= ({ register, errors, nextStep }: StepProps) => (
  <form className="flex flex-col gap-2">
    <h1 className="text-2xl text-white strong m-auto py-4">User base info</h1>
    <Input label="Username" {...register("username")} error={errors.username} />
    <Input label="Password" {...register("password")} error={errors.password} type="password" />
    <Input label="Email" {...register("email")} type="email" error={errors.email} />
    <div className="flex justify-end my-2">
      <Button label="Next" type="button" onClick={nextStep} />
    </div>
  </form>
);