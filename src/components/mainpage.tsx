import denis from "../../src/assets/IMG_6818-removebg.png";

export default function MainPage({ fadeIn }: { fadeIn: boolean }) {
  return (
    <div
      id="mainpageDiv"
      className={`w-screen h-screen flex flex-col bg-majollete`}
    >
      <div className="flex flex-col lg:flex-row flex-grow">
        <div className="w-full h-1/2 lg:h-full lg:w-5/12 flex flex-col justify-evenly">
          <div
            className={`flex flex-col mx-auto space-y-8 font-normal transition duration-1000 ${
              fadeIn && "-translate-x-full"
            }`}
          >
            <div className="text-4xl flex flex-col font-bold max-lg:text-3xl items-center text-mindaro font-montserrat">
              <div>Frontend && Backend</div>
              <div>Developer.</div>
            </div>
            <div className="text-white mx-auto text-lg w-4/6">
              I like to create awesome products with great user experiences.
            </div>
          </div>
          <div
            className={`text-mindaro flex justify-evenly space-x-5 w-5/6 mx-auto transition duration-1000  ${
              fadeIn && "-translate-x-full"
            }`}
          >
            <div>
              Highly skilled at developing robust, fast and secure web
              applications
            </div>
            <div>
              If you want to get in touch with me, please send me a message in
              any convenient for you way
            </div>
          </div>
          <div
            className={`flex space-x-5 w-3/4 mx-auto transition duration-1000 opacity-90 ${
              fadeIn && "-translate-x-full"
            }`}
          >
            <a href="https://github.com/lite1pal" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github-image"
                width="40"
                height="auto"
                className=""
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ef89121012c12b23"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/331630/upwork.svg"
                alt="upwork-image"
                width="40"
                height="auto"
                className=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/"
              target="_blank"
            >
              <img
                src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1700697600&v=beta&t=WoWmGLIM13DynFE4R-ry0sIq_c_hyKmcx0PiD7Wxxv4"
                alt="linkedin-image"
                width="40"
                height="auto"
                className=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCv7hSVNi7pAmYtI6NnVtPEQ"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                alt="youtube-image"
                width="40"
                height="auto"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=deniskatarasenko6@gmail.com"
              target="_blank"
            >
              <img
                src="https://static-00.iconduck.com/assets.00/gmail-icon-509x512-ikquhn8l.png"
                alt="gmail-image"
                width="40"
                height="auto"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-1/2 lg:h-full bg-mindaro lg:w-7/12 flex flex-col">
          <div
            className={`m-auto shadow-md transition duration-1000  ${
              fadeIn && "translate-x-full"
            }`}
          >
            <img height="auto" width="500" src={denis} alt="My image" />
          </div>
        </div>
      </div>
    </div>
  );
}
