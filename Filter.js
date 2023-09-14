import React from "react";

function About(){
    return(
        <div>
            <div className="bg-white w-[900px] ml-96 pt-2 pb-10">
             <div className="flex justify-between ">   <div className=" ml-7"><h1 className="font-bold ">LOGO</h1>
                <p className="mt-2">Lorem ipsum is simply dummy test <br/>of printing and typesetting industry.</p>
                <p className="mt-8">@lorem</p></div>
                <div  className="">
                    <h1 className="font-bold ">About Us</h1>
                    <p className="mt-2">Lorem </p>
                    <p>portfoli</p>
                    <p>carrer</p>
                    <p>contact us</p>
                </div>
                <div className="">
                    <h1 className="font-bold ">Contact Us</h1>
                    <p className="mt-2">Lorem ipsum is simply dummy test <br/>of printing and typesetting. </p>
                    <p>industry</p>
                    <p>90885012565</p>
                    
                </div>
                <div className="flex mt-24 mr-8">
                   <div className="bg-white w-7  mr-2 h-8 rounded-full shadow "> <i className="fa-brands fa-facebook pl-2 pt-2"></i></div>
                   <div className="bg-white w-7   mr-2 h-8 rounded-full  shadow ">  <i className="fa-brands fa-twitter pl-2 pt-2"></i></div>
                   <div className="bg-white w-7   mr-2 h-8 rounded-full  shadow ">   <i className="fa-brands fa-instagram pl-2 pt-2"></i></div>
                   <div className="bg-white w-7   mr-2 h-8 rounded-full  shadow ">   <i className="fa-brands fa-linkedin pl-2 pt-2"></i></div>
                </div>

            </div>
            <div className="w-[100%] bg-neutral-400  h-[1px] mt-5" ></div>
            <p className="ml-72 mt-5">copyright@2021loream allright received</p>
            </div>
        </div>
    )
}
export default About