import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-950  to-sky-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I'm Rakshitha G, a dedicated full-stack developer with expertise in HTML, CSS, JavaScript,
         Python, Java, MySQL, Flask, and React. I love creating dynamic web applications, 
         ensuring seamless user experiences and robust server-side logic. With a strong focus on continuous learning and innovation,
          I stay updated with the latest web development trends
        </p>

        <br />

        <p className="text-xl">
        My mission is to build impactful digital solutions and collaborate with like-minded professionals.
         Explore my portfolio to see my work, and feel free to reach out for potential collaborations!.
        </p>
      </div>
    </div>
  );
};

export default About;
