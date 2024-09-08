import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.jpg";
import mongodb from "../../assets/mongodb.jpg";
import reactjs from "../../assets/reactjs.png";
import javascript from "../../assets/javascript.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
        id:3,
        logo: javascript,
        name: "JavaScript",
      },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    
    {
      id: 5,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: express,
      name: "ExpressJS",
    },
    {
      id: 7,
      logo: node,
      name: "node",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 10 months of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Experiance;