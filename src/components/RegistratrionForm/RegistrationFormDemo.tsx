import  { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  interests: { value: string }[];
};

 export const MultiStepForm = () => {
  const [step, setStep] = useState(1); 
  const { register, handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      interests: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "interests",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data); // Wyświetl dane na końcu
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const formData = watch(); // Służy do podglądu danych w podsumowaniu

  return (
    <div>
      {step === 1 && (
        <form>
          <h2>Krok 1: Podstawowe dane</h2>
          <div>
            <label htmlFor="firstName">Imię:</label>
            <input
              id="firstName"
              {...register("firstName", { required: "Imię jest wymagane" })}
            />
          </div>

          <div>
            <label htmlFor="lastName">Nazwisko:</label>
            <input
              id="lastName"
              {...register("lastName", { required: "Nazwisko jest wymagane" })}
            />
          </div>

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <h2>Krok 2: Zainteresowania</h2>
          {fields.map((field, index) => (
            <div key={field.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                {...register(`interests.${index}.value`, {
                  required: "Pole zainteresowanie jest wymagane",
                })}
                placeholder={`Zainteresowanie ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                style={{ marginLeft: "8px" }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ value: "" })}
            style={{ marginTop: "8px" }}
          >
            Add
          </button>

          <div style={{ marginTop: "16px" }}>
            <button type="button" onClick={prevStep} style={{ marginRight: "8px" }}>
              Back
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Podsumowanie</h2>
          <p>
            <strong>Imię:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Nazwisko:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Zainteresowania:</strong>
          </p>
          <ul>
            {formData.interests.map((interest, index) => (
              <li key={index}>{interest.value}</li>
            ))}
          </ul>

          <div style={{ marginTop: "16px" }}>
            <button type="button" onClick={prevStep} style={{ marginRight: "8px" }}>
              Back
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
