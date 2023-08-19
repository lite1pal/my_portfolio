import { useState } from "react";
import benelux_job_screen1 from "../../src/assets/Screenshot 2023-08-05 at 14.08.06.png";
import benelux_job_screen2 from "../../src/assets/Screenshot 2023-08-09 at 12.34.45.png";
import benelux_job_screen3 from "../../src/assets/Screenshot 2023-08-09 at 12.35.02.png";

export default function BeneluxJob({
  fadeIn,
  beneluxJobView,
}: {
  fadeIn: boolean;
  beneluxJobView: boolean;
}) {
  const [beneluxJobCount, setBeneluxJobCount] = useState(0);

  const handleBeneluxJobScreen = () => {
    if (beneluxJobCount === 0) {
      return benelux_job_screen1;
    } else if (beneluxJobCount === 1) {
      return benelux_job_screen2;
    } else if (beneluxJobCount === 2) {
      return benelux_job_screen3;
    }
  };
  return (
    <div
      id="beneluxjobDiv"
      className="w-screen mx-auto xl:h-screen flex font-pt_sans flex-col xl:flex-row text-black bg-stone-100"
    >
      <div className="flex flex-col xl:flex-row w-full xl:w-10/12 mx-auto lg:space-x-10 max-md:space-y-0">
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!beneluxJobView && "opacity-0 translate-y-10")
          } w-full xl:w-4/12 p-4 transition duration-1000 flex flex-col space-y-6 justify-center`}
        >
          <div className="text-3xl font-bold">Job Search Website</div>
          <div className="text-lg">
            Collaborated with the agricultural job search company,{" "}
            <span className="underline italic">Benelux Job</span>, and the UI/UX
            designer to develop a website for their business. I was responsible
            not only for building a front-end, but for setting up a server and a
            database as well.
          </div>

          <div className="text-xl">What I did</div>

          <div className="flex text-lg flex-col space-y-1">
            {/* <div>
              - Configured the server and integrated it with the database
            </div> */}
            <div>
              - Implemented session-based authentication to ensure access is
              granted only to authorized users
            </div>
            <div>
              - Developed a secure RESTful API with robust input validation to
              effectively handle requests from the front-end
            </div>
            <div>
              - Collaborated closely with the designer to create the front-end,
              adopting a mobile-first approach
            </div>
            <div>
              - Optimized database operations for improved efficiency and
              enhanced overall website responsiveness
            </div>
          </div>
        </div>
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!beneluxJobView && "opacity-0 translate-y-10")
          } flex flex-col transition duration-1000 space-y-16 max-xl:py-10 max-xl:px-2 items-center justify-center`}
        >
          <div className="flex flex-col max-md:w-11/12 w-10/12 xl:w-full space-y-7">
            <div className="flex items-center text-lg justify-between max-md:w-1/3 w-1/6 mx-auto">
              <div className="hover:underline cursor-pointer text-slate-700">
                <a href="https://benelux-job.onrender.com/" target="_blank">
                  Link
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/lite1pal/BeneluxJob"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fa-xl"></i>
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <img
                className="rounded-lg transition duration-200 hover:-rotate-1 border-2 border-slate-300"
                width="750"
                height="auto"
                src={handleBeneluxJobScreen()}
                alt="image"
              />
            </div>
            <div className="flex space-x-6 mx-auto">
              <div
                onClick={() =>
                  setBeneluxJobCount((prev) => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  })
                }
              >
                <i
                  style={beneluxJobCount === 0 ? { color: "silver" } : {}}
                  className="fa-solid fa-arrow-left fa-xl"
                ></i>
              </div>
              <div
                onClick={() =>
                  setBeneluxJobCount((prev) => {
                    if (prev === 2) {
                      return 2;
                    }
                    return prev + 1;
                  })
                }
              >
                <i
                  style={beneluxJobCount === 2 ? { color: "silver" } : {}}
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  alt="ts-image"
                  width="20"
                  height="auto"
                />
                <div>Typescript</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt="react-image"
                  width="20"
                  height="auto"
                />
                <div>React</div>
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
                  src="https://assets.zabbix.com/img/brands/nodejs.svg"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>Node</div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                  alt="tailwind-image"
                  width="20"
                  height="auto"
                />
                <div>Express</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
