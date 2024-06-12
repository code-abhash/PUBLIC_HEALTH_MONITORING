import React from "react";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "./List.json";
import './Home.css'
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Choose Disease");

  const handleSelect = (disease) => {
    setValue(disease);
    setIsOpen(false);
  };


  return (
    <React.Fragment>
      <div className="flex flex-row justify-center  items-center mb-10 ">
        <button className="font-bold bg-black text-slate-300 px-6 py-4 text-xl tracking-wider hover:bg-slate-300 hover:text-black rounded-lg but_pan h-20 w-40 sm:h-14 sm:w-60" onClick={()=>{
          navigate('/disease')
        }}>
          Health Status
        </button>
        <div className="relative flex flex-col items-center m-2 rounded-lg">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="but_pan bg-black text-slate-300 font-bold flex items-center justify-between  px-6 py-4 text-xl tracking-wider hover:bg-slate-300 hover:text-black rounded-lg h-20 w-40 sm:h-14 sm:w-60"
          >
            {value}
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
          {isOpen && (
            <div className=" but_pan font-medium absolute bg-black text-slate-300 top-20 flex z-10 flex-col items-start rounded-lg p-4 w-full">
              {list.map((item, i) => (
                <div 
                key={i}
                className="p-1 w-full hover:bg-slate-300 border-b-2  hover:text-black"
                onClick={() => handleSelect(item.disease)}>
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

