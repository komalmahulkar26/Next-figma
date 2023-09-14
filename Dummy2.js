import React from "react";
import  image from "../Images/Rectangle.png"
import image1 from "../Images/Group 46.png"

function Dummy(){
    return(
        <div>
<div className="bg-white   w-[900px] ml-96 pt-2 pb-16">
 <div className="flex justify-between mr-20"> < div className="w-64 ml-28"> 
 <img src={image}/>
 </div>
   <div className="w-[400px]">
    <h1 className="font-bold text-black text-2xl">Lorem Ipsum is simply dummy text <br/>of the printing.</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .</p>
  <div className="flex justify-between w-80 mt-2">
     <img  className="w-32"src={image1}/>
     <span className="text-sky-500">Read More</span></div>
   </div></div> 
</div>
        </div>
    )
}
export default Dummy