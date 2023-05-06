import React from "react";

const Experience = () => {
  return (
    <section
      id="work-history-wrapper"
      class="section--page section-to-fade fade-section work"
    >
      <h2>Work History</h2>
      <div class="line-break"></div>

      <div class="card--work-history">
        <strong>
          🚧 API Beta Tester | National Basketball Association (NBA)
        </strong>
        <p>01/2023 - Present</p>
        <p>
          Worked with NBA Software Engineers from the Stats Technology
          department to test the NBA APIs for fetching player records, team
          rosters, injuries and many more.
        </p>
        <ul>
          <li>
            Used React to create minigames based on the data fetched from the
            NBA APIs.
          </li>
          <li>Tested API endpoints for bugs and deficiencies.</li>
        </ul>
      </div>

      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>🚧 SOFTWARE DEVELOPER | TALLECO JOBTARGET PH </strong>
        <p>09/2022 - Present</p>
        <p>
          Worked on building automated posting for a specific company's job
          posting to other sites. Built internal projects that would make work
          much efficient and easier.
        </p>
        <ul>
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
            able to handle seven developers to support different internal tools.
          </li>
        </ul>
      </div>

      <div class="line-break"></div>
      <div class="card--work-history">
        <strong>
          🚧 DEVELOPMENT ENGINEER - TECHNICAL SPECIALIST II | ALLIANCE SOFTWARE
          INC.
        </strong>
        <p>2019 - 2021</p>
        <p>
          Worked as a full-stack developer and was able to be part of different
          projects locally and abroad.
        </p>
        <ul>
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
            enabled them to display their bikes, request for service and set an
            event for meetups.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
