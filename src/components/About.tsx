const About = () => {
  return (
    <>
      <div id="about-me" className="-mt-10 h-min flex flex-col px-6 md:px-28 md:flex-row md:items-center md:gap-10 md:p-10 lg:p-40 xl:px-60 xl:h-screen xl:-mt-20">
        <img
          className="rounded-full mx-auto size-52 mb-6 md:size-80"
          src="/assets/images/profile_image.jpg"
          height={100}
          width={100}
          alt="profile image"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-center">
            Arhon Pineda
          </h1>
          <div className="flex justify-center gap-4 text-sm">
            <a rel="noopener noreferrer" target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/arhon-p-ba957023a/">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" title="GitHub" href="https://github.com/aendoarphin">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </div>
          <hr className=""/>
          <p className="text-sm">
          I&apos;m an Oklahoma-based web developer with diverse experience in various technologies. Currently exploring modern frameworks, I&apos;m on a journey towards becoming a full-stack developer.
          </p>
          <p className="text-sm">
          My mission is to enhance user experience through intuitive and accessible software. I&apos;m committed to ensuring seamless access, navigation, and utilization of the software I create. By simplifying complex interfaces, my goal is to make technology more user-friendly and efficient for everyone.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
