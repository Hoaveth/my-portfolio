import React from "react";
import mindMate from "../assets/portfolio/p1.png";
import magic from "../assets/portfolio/p3.png";
import taskify from "../assets/portfolio/p2.png";
import reactWeather from "../assets/portfolio/p4.png";
import finance from "../assets/portfolio/p5.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "MindMate",
      description: "*exceeded quota",
      src: mindMate,
      repo: "https://github.com/Hoaveth/mindmate",
      link: "https://mindmate-iota.vercel.app",
    },
    {
      id: 2,
      title: "Magic Memory",
      repo: "https://github.com/Hoaveth/magic-memory",
      link: "https://prismatic-longma-fd84b8.netlify.app/",
      src: magic,
    },
    {
      id: 3,
      title: "Taskify",
      repo: "https://github.com/Hoaveth/todo-list-with-typescript",
      link: "https://hoaveth.github.io/todo-list-with-typescript/",
      src: taskify,
    },
    {
      id: 4,
      title: "Weather App",
      repo: "https://github.com/Hoaveth/react-weather-app",
      link: "https://hoaveth.github.io/react-weather-app/",
      src: reactWeather,
    },
    {
      id: 5,
      title: "Finance Tracker",
      repo: "https://github.com/Hoaveth/finance-tracker",
      link: "https://hoaveth.github.io/finance-tracker/",
      src: finance,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white max-sm:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline decoration-violet-700 decoration-wavy underline-offset-8">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, link, repo, description }) => (
            <div key={id} className=" shadow-md shadow-violet-700 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-56"
              />
              <p className="m-auto text-center mt-5 font-bold ">
                {title} {description ? "-" + description : null}
              </p>
              <div className="flex items-center justify-center">
                <a
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={link}
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                  href={repo}
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
