import { CustomButton, CustomButtonGoHome } from "@/components/Button";

const ChallengeIntro = () => {
  return (
    <div className="relative w-[396px] h-[500px] max-w-md mx-auto">
      {/* Group Background */}
      <div className="z-10 absolute top-[542px] left-[-83.09]px] w-[715.21px] h-[303.34px] shadow-[0px_8px_0px_0px_#007DAA] opacity-100" >
        <img src="icons/Background.svg" alt="HHHHH" />
      </div>

      {/* Header */}
      <div className="relative bg-secondary-main h-[214px] flex items-center border-b-8 border-primary-blue rounded-b-[32px]">
        <h1 className="text-2xl text-center font-bold text-white mt-8">Get ready for the weekly challenge!</h1>
        <div className="absolute bottom-2 inset-x-0 ml-3">
        <img src="icons/Rectangle-214.svg" alt="HolamUNDO" />
        </div>
      </div>

      {/* Week Info */}
      <div className="-mt-10 flex justify-center bg-secondary-main/5">
        <div className="z-20 w-[152px] h-[60px] bg-secondary-main flex items-center justify-center border-b-4 border-gray-400 rounded-[16px] shadow-sm">
          <div className="bg-secondary-600 w-[144px] h-[52px] border-none rounded-[16px] flex items-center justify-center">
            <h1 className="text-white font-bold text-center">
              Week 12
              </h1>
          </div>
        </div>
      </div>

     {/* Snippet */}
<div className="relative bg-secondary-main/5 h-[516px] flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
  <div className="absolute flex flex-col items-center justify-center">
    <img
      src="icons/Group-216.svg"
      alt="Clouds"
    />
  </div>
  <div className="flex flex-col items-center justify-center z-30 mt-0">
    <img
      src="icons/Frame-39352.svg"
      alt="Central icon"
      className="absolute top-[100px]"
    />
  </div>
  <div className="absolute top-[335px] z-10 w-[356px] h-[64px] left-[20px] bg-material-tertiary-50 border-material-tertiary-300 border-4 rounded-[16px] flex items-center justify-center shadow rounded-br-none">
    <h1 className="text-center text-[12px] font-[325] leading-[18px]">
      Lorem ipsum dolor sit amet consectetur. Vitae tortor risus a fusce.
    </h1>
  </div>
  <div className="absolute top-[420px] z-10">
   <CustomButton></CustomButton>
  </div>
  <div className="absolute top-[480px] z-10">
   <CustomButtonGoHome></CustomButtonGoHome>
  </div>
</div>
      {/* Icon-FA */}
      <div className="absolute top-[60px] left-[20px] w-[28px] h-[28px] text-secondary-800 opacity-90">
        <img src="/icons/Icon-FA.svg" alt="iconX" />
      </div>

    </div>
  );
};

export default ChallengeIntro;

      {/* Page Navigation */}
      <div className="absolute bottom-0 w-[396px] h-[52px] bg-white border-b-[1px] border-grey-100 opacity-100">
       
        {/* Safe Area */}
        <div className="flex justify-between items-center p-[20.42px_31.31px_13.61px_31.31px]">
          {/* Additional content here */}
        </div>
      </div>