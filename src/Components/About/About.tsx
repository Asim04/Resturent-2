import Image from "next/image"
import img1 from "../../../public/Image/About/about1.png"
import img2 from "../../../public/Image/About/About2.png"
import img3 from "../../../public/Image/About/About3.png"

const About = () => {
  return (
    <div>

<section id="about" className="py-16 bg-white">
        <div className=" flex container mx-auto">
            
            {/* Images */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-[669px] h-[734px] mt-6 flex items-center gap-3 md:flex-col  ">
                <div className="container mx-auto w-[698px] h-[714px] relative flex items-center ">
                
             
                <Image
                  src={img1}
                  width={300}
                  height={536}
                  alt="Fresh Vegetables"
                  className="rounded-lg shadow-lg absolute z-10   "
                />
           
              
                <Image
                  src={img3}
                  width={190}
                  height={271}
                  alt="Cooking"
                  className="rounded-lg shadow-lg absolute z-20 bottom-[90px] right-[200px]  "
                />
             
              
                <Image
                  src={img2}
                  width={190}
                  height={382}
                  alt="Delicious Food"
                  className="rounded-lg shadow-lg absolute z-0  top-[150px] left-[310px] "
                />
                </div>
                
              
              </div>
            </div>

                    {/* Text Content code start */}
            <div className="w-[526px] h-[266px] mt-56">

              <h3 className="text-5xl text-[#333333] font-bold mb-10">Food is an important 
              part Of a balanced Diet</h3>
  
          
              <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="flex gap-3">      
              <button className="py-4 px-10 gap-3 bg-[#195A00] text-white rounded-md">Show mor</button>
              <button className="py-5 px-5 space-x-5 bg-[#195A00] text-white rounded-full">Show mor</button>
              </div>

            </div>
  
          
        </div>
      </section>
      
    </div>
  )
}

export default About
