import React from "react";
import image from "../Images/beneoshop.png"
import image1 from "../Images/HyperGrid.png"
import image2 from "../Images/caspio.png"
import image3 from "../Images/leotrippi.png"

function Company (){
    return(
        <div>
<div className=" bg-white ml-96 h-[350px] w-[900px] " >
<h1 className="font-bold text-black text-2xl pt-10 ml-72 ">you will be in good company</h1>
<div className=" flex justify-between w-[800px] ml-10">
      <img className="w-40" src={image}/>
      <img  className="w-40"  src={image1}/>
      <img className="w-40"  src={image2}/>
      <img  className="w-40" src={image3}/>
    </div></div>

        </div>
    )
}
export default Company