import React from "react";

const About = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black md:h-screen text-white max-sm:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline decoration-violet-700 decoration-wavy underline-offset-8">
            Experience
          </p>
        </div>

        <div className="mt-5">
          <strong>🚧 SOFTWARE DEVELOPER | TALLECO JOBTARGET PH </strong>
          <p>09/2022 - Present</p>
          <p className="mt-5">
            Worked on building automated posting for a specific company's job
            posting to other sites. Built internal projects that would make work
            much efficient and easier.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Job Manual Posting is faster by 45% through my internal project
              Browser Plugin that copies and pastes data.
            </li>
            <li>
              Produced a much faster site templating generator by migrating the
              older version to React and Dotnet.
            </li>
            <li>
              Produced high quality cloud integrations for individual company's
              job postings.
            </li>
            <li>
              Promoted to become Team Lead for Product Operations Tools and was
              able to handle seven developers to support different internal
              tools.
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <strong>
            🚧 API Beta Tester | National Basketball Association (NBA)
          </strong>
          <p>01/2023 - 02/2023</p>
          <p className="mt-5">
            Worked with NBA Software Engineers from the Stats Technology
            department to test the NBA APIs for fetching player records, team
            rosters, injuries and many more.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Used React to create minigames based on the data fetched from the
              NBA APIs.
            </li>
            <li>Tested API endpoints for bugs and deficiencies.</li>
          </ul>
        </div>
        <div className="line-break"></div>

        <div className="line-break"></div>
        <div className="mt-5">
          <strong>
            🚧 DEVELOPMENT ENGINEER - TECHNICAL SPECIALIST II | ALLIANCE
            SOFTWARE INC.
          </strong>
          <p>04/2019 -04/2021</p>
          <p className="mt-5">
            Worked as a full-stack developer and was able to be part of
            different projects locally and abroad.
          </p>
          <ul className="list-disc ml-5">
            <li>
              Built an internal project for accomodating device requests from
              employees.
            </li>
            <li>
              Worked on a social media platform, Facebook-like app, for a local
              japanese celebrity using React, Python, Java and AWS.
            </li>
            <li>
              Worked on a mobile app for Harley Davidson Cebu customers that
              enabled them to display their bikes, request for service and set
              an event for meetups.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
