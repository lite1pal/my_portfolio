import { useState } from "react";
import blog_screen1 from "../assets/blog_screen_1.png";
import blog_screen2 from "../assets/blog_screen_2.png";
import blog_screen3 from "../assets/blog_screen_3.png";

export default function Blog({
  fadeIn,
  blogView,
}: {
  fadeIn: boolean;
  blogView: boolean;
}) {
  const [blogCount, setBlogCount] = useState(0);

  const handleBlogCount = () => {
    if (blogCount === 0) {
      return blog_screen1;
    } else if (blogCount === 1) {
      return blog_screen2;
    } else if (blogCount === 2) {
      return blog_screen3;
    }
  };
  return (
    <div
      id="blogDiv"
      className="w-screen mx-auto xl:h-screen flex font-pt_sans flex-col xl:flex-row text-black bg-purple-100"
    >
      <div className="flex flex-col xl:flex-row w-full xl:w-10/12 mx-auto xl:gap-x-10">
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!blogView && "opacity-0 translate-y-10")
          } flex flex-col flex-grow space-y-16 order-2 max-xl:py-10 max-xl:px-2 transition duration-1000 justify-center`}
        >
          <div className="flex flex-col max-md:w-11/12 w-10/12 xl:w-full mx-auto space-y-7">
            <div className="flex items-center text-lg justify-between max-md:w-1/3 w-1/6 mx-auto">
              <div className="hover:underline cursor-pointer text-slate-700">
                <a href="https://messanger-seven.vercel.app/" target="_blank">
                  Link
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/lite1pal/happy-blog"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fa-xl"></i>
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <img
                className="rounded-lg transition duration-200 hover:rotate-1 border-2 border-slate-300"
                width="750"
                height="auto"
                src={handleBlogCount()}
                alt="image"
              />
            </div>
            <div className="flex space-x-6 mx-auto">
              <div
                onClick={() =>
                  setBlogCount((prev) => {
                    if (prev === 0) {
                      return 0;
                    }
                    return prev - 1;
                  })
                }
              >
                <i
                  style={blogCount === 0 ? { color: "silver" } : {}}
                  className="fa-solid fa-arrow-left fa-xl"
                ></i>
              </div>
              <div
                onClick={() =>
                  setBlogCount((prev) => {
                    if (prev === 2) {
                      return 2;
                    }
                    return prev + 1;
                  })
                }
              >
                <i
                  style={blogCount === 2 ? { color: "silver" } : {}}
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
            </div>
          </div>
        </div>
        <div
          className={`${
            (fadeIn && "opacity-0 translate-y-10") ||
            (!blogView && "opacity-0 translate-y-10")
          } w-full xl:w-4/12 flex flex-col p-4 order-1 transition duration-1000 space-y-6 justify-center`}
        >
          <div className="text-3xl font-bold">Blog</div>
          <div className="text-lg">
            This is a blog website's layout. It's intended to serve as a means
            of displaying my design and UX/UI skills.
          </div>
          <div className="text-xl">What I did</div>
          <div className="flex text-lg flex-col space-y-1">
            <div>- Set up with T3 stack</div>
            <div>- Designed a layout with TailwindCSS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
