import Image from "next/image";
import img1 from "../../../public/Image/Aboutus/Group 67.png"
import img2 from "../../../public/Image/Aboutus/Group 68.png"
import img3 from "../../../public/Image/Aboutus/unsplash_Wu0MmDYdUB4.png"
import img4 from "../../../public/Image/About/Box (1).png"
const AboutUs = () => {
    return (
      <section id="about" className="py-16 bg-white">
        <div className=" flex container mx-auto">
            <div className="w-[400px] h-[510px] mt-56">

                    {/* Text Content */}
              <h3 className="text-3xl text-[#333333] font-bold mb-10">Why We Are The Best?</h3>
  
          
              <p className="text-gray-600 mb-6">
                We focus on delivering the finest and most delicious food made from the freshest organic ingredients. Every dish we serve reflects our passion for taste and quality.
              </p>
              <div>
                <Image 
                src={img4}
                alt="" />
              </div>
              
              
            
            </div>
  
            {/* Images */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-[698px] h-[714px] mt-6 flex items-center gap-3 md:flex-col  ">
                <div className="container mx-auto w-[698px] h-[714px] relative flex items-center ">
                
             
                <Image
                  src={img1}
                  width={424}
                  height={523}
                  alt="Fresh Vegetables"
                  className="rounded-lg shadow-lg absolute z-10   "
                />
           
              
                <Image
                  src={img2}
                  width={385}
                  height={516}
                  alt="Cooking"
                  className="rounded-lg shadow-lg absolute z-20 bottom-0 right-0   "
                />
             
              
                <Image
                  src={img3}
                  width={212}
                  height={259}
                  alt="Delicious Food"
                  className="rounded-lg shadow-lg absolute z-0  top-16 left-[330px] "
                />
                </div>
                
              
              </div>
            </div>
          
        </div>
      </section>
    );
  };
  
  export default AboutUs;

  