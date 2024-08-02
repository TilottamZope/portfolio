import React from 'react'

const About = () => {
    return (
        <div
          name="About"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        >
          <div>
            <h1 className="text-3xl font-bold mb-5">About</h1>
            <p>
              Hello, I'm Tilottam, a passionate Web developer with a keen eye for MERN
              Stack . With a background in IT, I strive to create impactful and
              visually stunning Software solutions that leave a lasting impression.
            </p>
            <br />
            <h1 className="text-green-600 font-semibold text-xl">
              Education & Training
            </h1>
            <span>
              Bachelor of Technology Year(2022), Java Full Stack Development Certified Course Year(2023)
            </span>
            <br />
            <br />
            <h1 className="text-green-600 font-semibold text-xl">
              Skills & Expertise
            </h1>
            <span>
              HTML, CSS, JS, React JS, Express JS, Node JS, MongoDB
            </span>
            <br />
            <br />
            <h1 className="text-green-600 font-semibold text-xl">
              Professional Experience
            </h1>
            <span>
              Software Developer at Aimtoz Technology Pune, Nov(2023) To Till Now
            </span>
            <br />
            <br />
          </div>
          <br />
          <hr />
        </div>
      );
}

export default About
