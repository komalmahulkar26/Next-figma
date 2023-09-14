import React from "react";


function Form(){
    return(
        <div>
            <div className="bg-sky-100  w-[900px] ml-96 pt-2 pb-10">
                <h1 className="ml-[400px] font-semibold">Say hello</h1>
                <p className="ml-72">lorem lpsum is simply dummy text of printing</p>
                <div className="flex ml-72 mt-10">
                   <div className=" "> <h1>First Name</h1>
                    <input className="w-44 rounded-md bg-white h-7"/></div>
                    <div className="ml-5">
                    <h1>Last Name</h1>
                    <input className="w-44 rounded-md bg-white h-7"/>
                    </div>
                </div>
               <div className="ml-72"> <h1>Email Adress</h1>
                <input className="w-96 rounded-md bg-white h-7" />
                <h1>Message</h1>
                <input className="w-96 rounded-md bg-white h-32" /></div>
                <button className="w-36 h-10 rounded-md text-white mt-5 ml-[530px] bg-blue-900 ">Get in touch</button>
            </div>
            
        </div>
    )
}
export default Form