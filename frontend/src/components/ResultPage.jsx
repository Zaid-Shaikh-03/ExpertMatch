import React from "react";

function ResultPage() {
  return (
    <div className="bg-[url('/ResultPage_bg.svg')] bg-[#fef0f3] bg-[length:1800px_1800px] bg-[center_right_10em] bg-no-repeat h-[90%] flex gap-8 px-16 py-12 text-black">
      <div className="h-full backdrop-blur-sm bg-white/30 rounded-l-3xl shadow-lg shadow-zinc-500/40 w-[30%]  hover:shadow-2xl">
        <img
          src="./resultPage_resume.webp"
          className="inset-0 w-full h-full px-4 py-4 object-contain object-center"
        ></img>
      </div>
      <div className="backdrop-blur-sm bg-white/30 rounded-r-3xl shadow-lg shadow-zinc-500/40 overflow-hidden w-[65%] h-full px-12  hover:shadow-2xl">
        <div className="px-12 py-4 text-center font-semibold text-3xl text-gradient ">
          Best Experts For NameOfCandidant
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-2xl">
          <div className="">
            <img
              className="w-14 h-14 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-black font-medium text-lg">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center font-semibold text-xl">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-2xl">
          <div className="">
            <img
              className="w-14 h-14 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-black font-medium text-lg">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center font-semibold text-xl">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-2xl">
          <div className="">
            <img
              className="w-14 h-14 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-black font-medium text-lg">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center font-semibold text-xl">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2 hover:shadow-2xl">
          <div className="">
            <img
              className="w-14 h-14 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-black font-medium text-lg">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center font-semibold text-xl">92% Match</div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
