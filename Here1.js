import React from "react";
import image from "../Images/Group 98.png"
import image1 from "../Images/Group 9.png"
// import image2 from "../image/Group.png"

function Here1(){
    return(
        <div>
             <div className="bg-white   w-[900px] ml-96 pb-16">
                <div className=" ml-20 w-[600px] flex justify-between">
                <img  className=" w-64 h-64"src={image}/>
                <img   className=" w-64 h-64" src={image1}/>
                {/* <img   className=" w-64 h-64" src={image2}/> */}
                </div>
            </div>
          
        </div>
    )
}
export default Here1