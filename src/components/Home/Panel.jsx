import React from "react";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "./List.json";

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="flex flex-row justify-center items-center">
        <button className="bg-black text-slate-300 m-2 font-light px-6 py-4 text-xl tracking-wider hover:bg-slate-300 hover:text-black rounded-lg">
          Health Status
        </button>
        <div className="relative flex flex-col items-center m-2 rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-black text-slate-300 font-light flex items-center justify-between  px-6 py-4 text-xl tracking-wider rounded-lg"
          >
            Choose Disease
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
          {isOpen && (
            <div className=" bg-black text-slate-300 absolute top-20 flex flex-col items-start rounded-lg p-4 w-full">
              {list.map((item, i) => (
                <div className="p-1 w-full hover:bg-slate-300 hover:text-black">
                  <h3>{item.disease}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Panel;
