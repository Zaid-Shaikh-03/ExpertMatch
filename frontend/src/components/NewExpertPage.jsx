import { FileInput, Label } from "flowbite-react";

function NewExpertPage() {
  return (
    <div className="bg-[url('/NewExpertPage.svg')] bg-[#fff8e9] bg-[length:700px_1500px] bg-[center_left_5em] bg-no-repeat h-fit xl:h-[90%] flex gap-8 px-4 xl:px-16 py-4 flex-col xl:flex-row">
      <div className="w-full xl:w-[30%] h-full rounded-l-3xl rounded-r-3xl xl:rounded-r-none backdrop-blur-sm shadow-lg shadow-zinc-500/40 bg-white/30 p-4  hover:shadow-2xl">
        <h2 className="py-2 text-4xl font-semibold text-black text-gradient">
          Enter <span className="text-gradient">Your Best Expert Here</span>
        </h2>
        <p className="text-zinc-800 text-justify text-lg leading-[25px] py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          assumenda vero exercitationem, amet placeat, quidem sint aliquid
          tempora molestiae numquam ab vitae cumque ad optio?
        </p>
        <div className="w-full h-[60%]">
          <img
            src="./NewExpertPage_Image.png"
            alt=""
            className="w-[80%] h-full object-cover object-center mx-auto"
          />
        </div>
      </div>
      <div className="backdrop-blur-sm bg-white/30 shadow-lg shadow-zinc-500/40 w-full  xl:w-[70%] flex flex-col gap-8 rounded-l-3xl xl:rounded-l-none rounded-r-3xl hover:shadow-2xl">
        <div className="h-[10%] text-gradient font-semibold text-3xl pt-4 text-center">
          Upload Expert Resume Information
        </div>
        <div className="h-[80%]">
          <form action="" className="flex flex-col h-full gap-4">
            <div className="h-[10%]  flex xl:px-12 flex-col xl:flex-row px-4">
              <p className="self-start px-4 py-2 font-semibold text-black xl:py-0 xl: xl:self-center xl:px-0">
                Choose image of expert:
              </p>
              <FileInput
                id="file-upload"
                className="ml-4 w-full xl:w-[70%] bg-[#795757] backdrop-blur-sm bg-white/10 self-center hover:shadow-2xl"
              />
            </div>
            <div className="h-[10%] flex xl:px-12 flex-col xl:flex-row px-4">
              <p className="self-start px-4 py-2 font-semibold text-black xl:self-center xl:px-0 xl:py-0">
                Enter name of expert:
              </p>
              <input
                type="text"
                className="xl:ml-10 px-2 xl:px-0 outline-none rounded-xl backdrop-blur-sm bg-white/10 text-black my-0 xl:my-1 border-1 border-zinc-300 w-full xl:w-[70%]  hover:shadow-2xl"
              />
            </div>
            <div className="h-[10%] flex xl:px-12 flex-col xl:flex-row px-4">
              <p className="self-start px-2 py-2 font-semibold text-black xl:py-0 xl:self-center xl:px-0">
                Enter position of expert:
              </p>
              <input
                type="text"
                className="xl:ml-4 px-2 xl:px-0 py-2 xl:py-2 outline-none rounded-xl backdrop-blur-sm bg-white/10 text-black my-1 border-1 border-zinc-300 w-[70%]  hover:shadow-2xl"
              />
            </div>
            <div className="flex flex-col items-center justify-start px-4 xl:px-12 h-f">
              <p className="self-start py-2 font-semibold text-black">
                Upload resume of expert:
              </p>
              <div className="ml-4 flex w-full xl:w-[70%] h-fit items-center justify-center">
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
            <div className="h-[10%] px-8 xl:px-24 py-2">
              <button className="px-6 py-2 bg-[#795757] rounded-xl w-full  xl:w-[80%] xl:ml-[9.5rem]  hover:shadow-2xl">
                <a href="/experts" className="w-full h-full cursor-pointer">Submit</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewExpertPage;
