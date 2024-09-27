import { FileInput, Label } from "flowbite-react";

function HomePage() {
  return (
    <div className="bg-[url('/homePage_background_Image.svg')] bg-[#f6eee3] bg-contain bg-center h- xl:h-[90%] flex flex-col xl:flex-row gap-8 px-4 xl:px-16 py-6 xl:py-12 bg-no-repeat xl:bg-repeat">
      <div className="w-full xl:w-[30%] rounded-l-3xl backdrop-blur-sm shadow-lg shadow-zinc-500/40 bg-white/30 p-4 hover:shadow-2xl rounded-r-3xl xl:rounded-r-none">
        <h2 className="py-2 text-4xl font-semibold text-black text-gradient">
          Find <span className="text-gradient">Expert For Candidates</span>
        </h2>
        <p className="py-2 text-justify text-zinc-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          assumenda vero exercitationem, amet placeat, quidem sint aliquid
          tempora molestiae numquam ab vitae cumque ad optio?
        </p>
        <div className="w-full h-1/2">
          <img
            src="./HomePage_icon.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="backdrop-blur-sm bg-white/30 w-full xl:w-[70%] shadow-lg shadow-zinc-500/40 flex flex-col rounded-l-3xl xl:rounded-l-none rounded-r-3xl hover:shadow-2xl">
        <div className=" h-[20%] p-4">
          <h2 className="text-3xl font-semibold px-7 xl:text-center text-gradient ">
            Upload candidates resume here
          </h2>
          <h3 className="text-lg text-center text-zinc-800">
            find the best expert for candidates
          </h3>
        </div>
        <div className=" h-[80%]">
          <form action="" className="flex flex-col h-full gap-4">
            <div className=" h-[12%] flex flex-col xl:flex-row px-4 xl:px-12">
              <p className="self-start px-4 font-semibold text-black xl:self-center xl:px-0">
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
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer backdrop-blur-sm bg-white/30 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
            <div className="px-12 py-4 xl:py-0 h-fit">
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
