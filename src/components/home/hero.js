import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className="mt-8 container px-12 mx-auto ">
      <div className=" flex items-center justify-between">
        <div>
          <h3 className=" text-5xl text-gray-400">Hi, there</h3>
          <h1 className="text-3xl mt-8 ">I am Eric Wei,</h1>
          <h2 className="text-3xl mt-4">
            A fullstack web developer based in Melbourne, AU.
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <StaticImage
            width={380}
            height={380}
            placeholder="blurred"
            src="./../../images/lantian.png"
            alt="Lantian"
          />
        </div>
      </div>

      <Link
        className="text-xl text-gray-400 mt-8 hover:text-gray-600"
        to="/about"
      >
        Learn More
      </Link>
    </section>
  );
};

export default Hero;
