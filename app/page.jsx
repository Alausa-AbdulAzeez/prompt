import React from "react";

const Page = () => {
  return (
    <section>
      <h1 className="text-center mt-5 text-5xl font-extrabold text-black sm:text-6xl">
        Discover & Share
        <br />
        {/* <br className="max-md:hidden" /> */}
        <span className="text-center orange_gradient ">AI-Powered Prompts</span>
      </h1>
      <p className="text-center mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
    </section>
  );
};

export default Page;
