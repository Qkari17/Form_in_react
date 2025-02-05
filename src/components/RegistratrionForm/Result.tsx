import { Button } from "../../ui";
import { StepSummaryProps } from "./type";

export const Result = ({
  watch,
  handleSubmit,
  handleRegistrationForm,
  prevStep,
}: StepSummaryProps) => (
  <form
    className="flex flex-col gap-2"
    onSubmit={handleSubmit(handleRegistrationForm)}
  >
    <h1 className="text-2xl text-white strong m-auto py-4">Result</h1>
    <ul className="text-white">
      <li>
        <strong>Username:</strong> {watch("username")}
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
        <strong>Hobbies:</strong>{" "}
        {watch("hobbies")?.map((h, i) => (
          <span key={i}>{h.hobby}</span>
        ))}
      </li>
    </ul>
    <div className="flex justify-between my-2">
      <Button label="Back" onClick={prevStep} />
      <Button
        className="bg-cyan-600 hover:bg-cyan-700"
        label="Send"
        type="submit"
      />
    </div>
  </form>
);
