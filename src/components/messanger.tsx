import { useState } from "react";
import messanger_screen1 from "../../src/assets/Screenshot 2023-08-09 at 12.25.46.png";
import messanger_screen2 from "../../src/assets/Screenshot 2023-08-09 at 12.26.04.png";
import messanger_screen3 from "../../src/assets/Screenshot 2023-08-09 at 12.26.19.png";
import messanger_screen4 from "../../src/assets/Screenshot 2023-08-09 at 12.26.43.png";

export default function Messanger({
  fadeIn,
  messangerView,
}: {
  fadeIn: boolean;
  messangerView: boolean;
}) {
  const [messangerCount, setMessangerCount] = useState(0);

  const handleMessangerCount = () => {
    if (messangerCount === 0) {
      return messanger_screen1;
    } else if (messangerCount === 1) {
      return messanger_screen2;
    } else if (messangerCount === 2) {
      return messanger_screen3;
    } else if (messangerCount === 3) {
      return messanger_screen4;
    }
  };
  return (
    <div
      id="messangerDiv"
      className="w-screen mx-auto xl:h-screen flex font-pt_sans flex-col xl:flex-row text-black bg-blue-100"
    >
      <div className="flex flex-col xl:flex-row w-full xl:w-10/12 mx-auto xl:gap-x-10">
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!messangerView && "opacity-0 translate-y-10")
          } flex flex-col order-2 xl:order-1 flex-grow space-y-16 max-xl:py-10 max-xl:px-2 transition duration-1000 justify-center`}
        >
          <div className="flex flex-col max-md:w-11/12 w-10/12 xl:w-full mx-auto space-y-7">
            <div className="flex items-center text-lg justify-between max-md:w-1/3 w-1/6 mx-auto">
              <div className="hover:underline cursor-pointer text-slate-700">
                <a href="https://messanger-seven.vercel.app/" target="_blank">
                  Link
                </a>
              </div>
              <div>
                <a href="https://github.com/lite1pal/messanger" target="_blank">
                  <i className="fa-brands fa-github fa-xl"></i>
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <img
                className="rounded-lg transition duration-200 hover:rotate-1 border-2 border-slate-300"
                width="750"
                height="auto"
                src={handleMessangerCount()}
                alt="image"
              />
            </div>
            <div className="flex space-x-6 mx-auto">
              <div
                onClick={() =>
                  setMessangerCount((prev) => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  })
                }
              >
                <i
                  style={messangerCount === 0 ? { color: "silver" } : {}}
                  className="fa-solid fa-arrow-left fa-xl"
                ></i>
              </div>
              <div
                onClick={() =>
                  setMessangerCount((prev) => {
                    if (prev === 3) {
                      return 3;
                    }
                    return prev + 1;
                  })
                }
              >
                <i
                  style={messangerCount === 3 ? { color: "silver" } : {}}
                  className="fa-solid fa-arrow-right fa-xl"
                ></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 font-raleway">
            <div className="text-xl">Used technologies</div>
            <div className="text-lg flex flex-wrap items-center space-x-3 max-md:space-y-3">
              <div className="flex items-center space-x-2">
                <img
                  src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
                  alt="react-image"
                  width="20"
                  height="auto"
                />
                <div>Next</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://trpc.io/img/logo.svg"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>tRPC</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>Prisma</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  alt="ts-image"
                  width="20"
                  height="auto"
                />
                <div>Typescript</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>TailwindCSS</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>MongoDB</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://clerk.dev/favicon-docs/apple-touch-icon.png"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>Clerk</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!messangerView && "opacity-0 translate-y-10")
          } w-full xl:w-4/12 flex flex-col p-4 order-1 xl:order-2 transition duration-1000 space-y-6 justify-center`}
        >
          <div className="text-3xl font-bold">Real-Time Messanger</div>
          <div className="text-lg">
            I created this app to make sure I am able to get used to new
            technologies pretty quickly. And I ensured. This app allows to find
            other people, send them a message or a sticker and even upload
            images you like
          </div>
          <div className="text-xl">What I did</div>
          <div className="flex text-lg flex-col space-y-1">
            <div>- Integrated complete user management using Clerk</div>
            <div>- With the power of tRPC, created end-to-end typesafe API</div>
            <div>
              - For an ORM, I used Prisma which is compatible with almost all
              databases, in my case it is MongoDB
            </div>
            <div>- Made a layout using TailwindCSS which I love so much</div>
            <div>- Scaffolded a front-end using Next && React</div>
            <div>
              - Definitely, all project is typesafe because of stout Typescript.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
