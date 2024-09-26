import React from "react";
import { FileInput, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-[url('/homePage_background_Image.svg')] bg-[#f6eee3] bg-contain bg-center h-[90%] flex gap-8 px-16 py-12">
      <div className="w-[30%] rounded-l-3xl backdrop-blur-sm shadow-lg shadow-zinc-500/40 bg-white/30 p-4 hover:shadow-2xl">
        <h2 className="text-black text-4xl font-semibold text-gradient py-2">
          Find <span className="text-gradient">Expert For Candidates</span>
        </h2>
        <p className="text-zinc-800 text-justify py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          assumenda vero exercitationem, amet placeat, quidem sint aliquid
          tempora molestiae numquam ab vitae cumque ad optio?
        </p>
        <div className="w-full h-1/2">
          <img
            src="./HomePage_icon.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="backdrop-blur-sm bg-white/30 w-[70%] shadow-lg shadow-zinc-500/40 flex flex-col rounded-r-3xl hover:shadow-2xl">
        <div className=" h-[20%] p-4">
          <h2 className="text-center text-3xl font-semibold  text-gradient ">
            Upload candidates resume here
          </h2>
          <h3 className="text-center text-zinc-800 text-lg">
            find the best expert for candidates
          </h3>
        </div>
        <div className=" h-[80%]">
          <form action="" className="h-full flex flex-col gap-4">
            <div className=" h-[12%] flex px-12">
              <p className="text-black self-center font-semibold">
                Enter name fo candidant:
              </p>
              <input
                type="text"
                className="ml-4 outline-none rounded-xl backdrop-blur-sm bg-white/10 text-black my-1 border-zinc-400 border-[1px] w-[70%] text-lg  hover:shadow-2xl"
              />
            </div>
            <div className="h-[60%] flex justify-center">
              <div className="flex w-[90%] h-full items-center justify-center ">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 backdrop-blur-sm bg-white/30  hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="h-fit px-12">
              <button className="px-6 py-2 bg-[#795757] rounded-xl w-full  hover:shadow-2xl">
                <a className="w-full h-full" href="/resultPage">
                  See The Result
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
