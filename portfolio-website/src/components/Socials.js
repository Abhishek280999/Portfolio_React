import React from "react";

// import icons
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center "
            key={index}
          >
            <a className=" text-2xl  p-4 border border-white rounded-full hover:bg-slate-400" href={item.href} target="_blank">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
