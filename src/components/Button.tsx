import { Button } from "@/components/ui/button";

export const CustomButton = () => {
  return (
    <div className="relative">
      <Button className="relative bg-primary-main w-[356px] h-[48px] flex items-center justify-center border-b-4 border-primary-500 rounded-[16px] text-primary-800 font-bold overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="icons/Vector-27.svg"
          alt="Vector"
        />
        <span className="relative z-10">Start</span>
      </Button>
    </div>
  );
};

export const CustomButtonGoHome = () => {
    return (
      <div className="relative">
        <Button className="relative border w-[365px] h-[48px]">
          <span className="relative z-10 text-primary-700">Go Home</span>
        </Button>
      </div>
    );
  };

