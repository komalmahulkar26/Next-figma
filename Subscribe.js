import React from "react";

// import image from "../image/star 1.png"

function Subscribe(){

    return(
        <div>
            <div className="bg-sky-100 h-[380px] w-[900px] ml-96 pt-2 pb-10" >
                {/* <img  className="w-16 relative left-20 bottom-10" src={image}/> */}
<h1 className="text-2xl font-bold mt-5  ml-64 text-black">Lorem Ipsum is simply dummy </h1>
<h1 className="text-2xl font-bold ml-80 text-black">text of the printing.</h1>
<input placeholder="Enter a Email" className="w-80 border-none rounded-md mt-20 ml-40 h-10 pl-2" />
<button className="w-40 bg-black h-10 ml-10 rounded-md text-white">SUSCRIBE</button>
</div>

        </div>
    )
}
export default Subscribe