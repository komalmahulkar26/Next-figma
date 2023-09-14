import React from "react";

import image from "../Images/Group 73.png"
import image1 from "../Images/Group 25.png"
import Image from "../Images/Grp 24.png"
 import image3 from "../Images/Group 1.png"


function Application (){

    return(
        <div>
            <div className=" bg-white ml-96 h-[350px] w-[900px]  ">
                <div className="flex justify-between  pt-5 ml-10 w-[800px]">
                     <img  className="w-36 h-20"src={image}/>
                    <img className="w-36 h-20" src={image1}/>
                    <img  className="w-36 h-20" src={Image}/>
                    <img  className="w-36 h-20"src={image3}/> 
                </div>
                 <div className="pt-14">
        <span className="font-bold text-2xl text-black ml-32 pt-20">Lorem Ipsum is simply dummy text of the printing.</span>
        <p className="ml-44">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p className="ml-64">industry. Lorem Ipsum has been the industry's</p>
      </div>
            </div>
           
        </div>
    )
}
export default Application