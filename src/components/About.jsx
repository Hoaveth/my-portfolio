import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white max-sm:pt-20 max-sm:pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline decoration-violet-700 decoration-wavy underline-offset-8">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p>
      </div>
    </div>
  );
};

export default About;
