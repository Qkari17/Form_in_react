import { Text } from "../../ui";

interface StepShowProps {
  step: number;
}

export const StepShow = ({ step }: StepShowProps) => {
  return (
    <div className="flex gap-4 mb-6 lg: lg:justify-around lg:mb-20">
      <div className="flex flex-col lg:gap-4 ">
        <Text className={`${step === 1 ? "text-cyan-500" : "text-zinc-400"} ease-in-out duration-500`}>
          Step 1
        </Text>
        <div
          className={`${
            step === 1 ? "bg-cyan-500" : "bg-zinc-400"
          } h-3 w-15 border-2 border-black rounded-lg ease-in-out duration-500 `}
        ></div>
      </div>
      <div className="flex flex-col lg:gap-4 ">
        <Text className={`${step === 2 ? "text-cyan-500" : "text-zinc-400"} ease-in-out duration-500`}>
          Step 2
        </Text>
        <div
          className={`${
            step === 2 ? "bg-cyan-500" : "bg-zinc-400"
          } h-3 w-15 border-2 border-black rounded-lg ease-in-out duration-500`}
        ></div>
      </div>
      <div className="flex flex-col lg:gap-4 ">
        <Text className={`${step === 3 ? "text-cyan-500" : "text-zinc-400"} ease-in-out duration-500`}>
          Step 3
        </Text>
        <div
          className={`${
            step === 3 ? "bg-cyan-500" : "bg-zinc-400"
          } h-3 w-15 border-2 border-black rounded-lg ease-in-out duration-500`}
        ></div>
      </div>
      <div className="flex flex-col lg:gap-4 ">
        <Text className={`${step === 4 ? "text-cyan-500" : "text-zinc-400"} ease-in-out duration-500`}>
          Step 4
        </Text>
        <div
          className={`${
            step === 4 ? "bg-cyan-500" : "bg-zinc-400"
          } h-3 w-15 border-2 border-black rounded-lg ease-in-out duration-500`}
        ></div>
      </div>
    </div>
  );
};
