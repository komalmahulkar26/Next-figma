
import Product from "../Service/Product";
import Events from "../Service/Events";
import Projects from "../Service/Projects";
import Subscribe from "../About us/Subscribe"
import Filter from "../About us/Filter"
import image from "../Images/Group 91.png"
import image1 from "../Images/Group 94.png"

function Service(){
return(
    <div>
        <div className="bg-sky-200 w-[900px] h-[450px] ml-96  pb-10">
          <div className="ml-80 pt-14">
              <img  className="w-16 ml-28"src={image}/>
            <h1 className="text-black  ml-24 font-bold">OUR <span className="font-bold text-sky-600 ">SERVICE</span></h1>
            <p className="ml-5">Lorem Ipsum is simply dummy text of the </p>
            <p> printing and typesetting industry. Lorem Ipsum</p>
            <p className="ml-20"> has been the industry's.</p>
        </div>
        <img  className=" relative  bottom- top-"src={image1}/>
        </div>
       <Product/>
       <Events/>
       <Projects/>
        <Subscribe/>
        <Filter/>
    </div>
)

}

export default Service