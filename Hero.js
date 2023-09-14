import React from "react";
import Application from "./Application";
// import Location from "../Components/Location";
import Text1 from "./Text1";
import Comapny from "./Company"
import Subscribe from "../About us/Subscribe"
import Filter from "../About us/Filter";
import image1 from "../Images/Vector 26.png"
import image from "../Images/Sett.png"

function Hero(){
    return(
        <div>
<div className=" bg-sky-200 ml-96 h-[380px] w-[900px] flex ">
<img className="absolute top-48 w-8" src={image1}/>
      <div className="w-96 ml-12 pt-10 pb-5 ">
        <div className="  text-2xl text-black">
       <h1 className="   text-2xl text-black font-bold">   Experienced <span className="text-sky-600">mobile and web</span> applications and website
          builders measuring.</h1>
        </div>
        <p>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
          </p>
        <div className=" flex w-80  ml-5  mt-10 justify-between">
          <div  className=" w-36 pl-6 h-9 pt-1 text-white border-2  border-sky-500 rounded-md bg-sky-500">
            <button>Contact us</button>
          </div>
          <div className=" w-36 pl-6 h-9 pt-1 text-sky-600 border-2  border-sky-600 rounded-md bg-slate-50">
            <button>View more</button>
          </div>
         
          </div>

         
    </div>
    <div className="w-80 pb-5 ml-10">
    <img  className="relative bottom-20"src={image}/>
    </div>
          </div>
          
          <Application/>
          {/* <Location/> */}
          <Text1/>
          <Comapny/>
          <Subscribe/>
          <Filter/>
        </div>
    )
}
export default Hero