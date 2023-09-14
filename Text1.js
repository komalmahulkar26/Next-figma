import React from "react";
// import image from "../Images/Bell Angle.png"


function Text1 (){
    return(
        <div>
<div className=" bg-white  ml-96 pb-5  h-[380px] w-[900px]  ">
<div className=" w-[800px] mb- ml-10 flex justify-between">
<div className=" bg-slate-200 rounded-md h-[380px] w-96">
  <h2 className="text-black mt-10 font-bold ml-14 text-2xl">Loream lpsum is simply </h2><h2 className="text-black  ml-28 font-bold text-2xl ">dummy text</h2>
  <p className="mt-5 ml-10"> KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
    applications and website builders measuring dozens of completed
    projects. We build and develop mobile applications for several top
    platforms, including Android & IOS.</p>
    <button className="bg-sky-400  text-white mt-5 ml-32 w-28 h-10 rounded-md"> view more</button>
</div>
{/* <img   className="w-10 relative right- top-5" src={image}/> */}
<div className="w-96 h-[380px] rounded-md bg-blue-600">
  {/* <img   className="w-20 h-12 relative left-64 bottom-6" src={image}/> */}
 <h2 className="text-white  mt- font-bold text-2xl ml-14"> Loream lpsum is simply</h2><h2 className="text-white ml-28 font-bold text-2xl">dummy text</h2>
 <p className="mt-5 ml-10 text-white"> KODEX TECHNOLOGY (PVT) LTD is a team of experienced 
 mobile and web
  applications and website builders measuring dozens of completed
  projects. We build and develop mobile applications for several top
  platforms, including Android & IOS.</p>
  <button className= " mt-5 text-sky-600 ml-32 bg-white border-blue-800  w-28 h-10 rounded-md"> view more </button>
</div>
    </div>
    </div>
        </div>
    )
}
export default Text1