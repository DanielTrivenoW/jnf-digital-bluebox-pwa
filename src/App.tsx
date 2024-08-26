import './App.css'

export default function App() {
  return (
    <div className="w-[396px] h-[500px] max-w-md mx-auto">
      <div className="bg-secondary-main h-[214px] flex items-center border-b-8 border-primary-blue rounded-b-[32px]">
        <h1 className="text-2xl text-center font-bold text-white">Get ready for the weekly challenge!</h1>
      </div>
      <div className="-mt-10 flex justify-center">
        <div className="w-[152px] h-[60px] bg-secondary-main flex items-center justify-center border-gray-400 border-b-4 rounded-[16px]">
          <h1 className="text-white font-bold text-center">Week 12</h1>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="w-[356px] h-[64px] bg-[#FFF7E3] border-[#FCD25E] border-4 rounded-[16px] flex items-center justify-center">
          <h1 className="text-center">Lorem ipsum dolor sit amet consectetur. Vitae tortor risus a fusce.</h1>
        </div>
      </div>
    </div>
  );
}
