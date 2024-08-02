import React from 'react'
import Photo1 from '../../assets/Photo1.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <>
          <div
            name="Home"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome To My PortFolio</span>
                <div className="flex space-x-1 text-2xl md:text-4xl">
                  <h1>Hii..!, I'm a</h1>
                  <ReactTyped
                    className="text-red-700 font-bold"
                    strings={["Developer", "Programmer", "Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
                <br />
                <p className="text-sm md:text-md text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam, recusandae consequatur. Accusamus sint libero eligendi
                  laborum fuga repudiandae? Asperiores tempore eos animi dolores
                  corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
                  cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
                </p>
                <br />
                {/* social media icons */}
                <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                  <div className="  space-y-2">
                    <h1 className="font-bold text-center ">Available on</h1>
                    <ul className="flex space-x-5">
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <FaSquareGithub className="text-2xl cursor-pointer" />
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/" target="_blank">
                          <BsInstagram className="text-2xl cursor-pointer" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" space-y-2">
                    <h1 className="font-bold text-center">Currently working on</h1>
                    <div className="flex space-x-5">
                      <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:ml-48 md:mt-15 order-1">
                <img
                  src={Photo1}
                  className="rounded-full md:w-[450px] md:h-[500px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />
          
        </>
      );
}

export default Home
