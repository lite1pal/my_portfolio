export default function About({
  fadeIn,
  aboutView,
}: {
  fadeIn: boolean;
  mainPageView: boolean;
}) {
  return (
    <div
      id="mainpageDiv"
      className={`w-screen h-screen font-montserrat flex flex-col`}
    >
      <div className="text-xl">Service</div>
      <div>
        I have a solid expertise in working with various back-end and front-end
        technologies. Here the services I am providing:
        <div>
          Creating a full-stack solution utilizing the power of NextJS, tRPC,
          Prisma and TailwindCSS
        </div>
        <div>Creating a RESTful API with NodeJS and ExpressJS</div>
        <div>Integrating external APIs</div>
        <div>
          Configuring and setting a SQL or NoSQL database including PostgreSQL,
          MySQL or MongoDB
        </div>
        <div>
          Making session or token based authentication system from the ground or
          using the services that Clerk API provides
        </div>
        <div>
          Developing a front-end with React, Redux toolkit, HTML5 and
          TailwindCSS
        </div>
        <div>Deploying a web application on Render or Vercel</div>
      </div>
    </div>
  );
}
