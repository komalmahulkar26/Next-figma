import React from "react";
import image from "../Images/product.png"

function Product(){
    return(
        <div>
            <div className="bg-white  w-[900px] ml-96 pt-40  pb-10">
              <div className="flex">  <div className=" w-[450px] ml-14 mt-5">
                    <h1 className="font-bold text-2xl">Lorem lpsum is simply dummy <br/>text of printing.</h1>
                    <p className="mt-8">KODEX TECHNOLOGY (PVT) LTD is a team of experienced  mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
<p className="mt-5">KODEX TECHNOLOGY (PVT) LTD is a team of experienced  mobile and web applications and website builders measuring dozens </p>
<button className="w-32 h-10 text-blue-500 border-2 mt-8 rounded-md bg-white border-blue-400">contact us</button>
                </div>
                <div className="w-[650px] ">
                    <img className="  mr-10 mt-14" src={image}/>
                </div></div>
            </div>
        
        </div>
    )
}

export default Product