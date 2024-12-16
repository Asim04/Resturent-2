
import Image from "next/image";
import img from "../../../public/Image/Headerpic/Healthy & Testy Food.png"
import star from "../../../public/Image/Headerpic/Shining stars.png"

const Hero = () => {
    return (
        <section className="  w-full relative bg-green-100 pt-24 pb-16 mx-auto">
       
          <div className="md:w-[300] md:h-[300] sm:w-[300] smh-[300] sm:mt-72 lg:mt-auto lg:ml-24 w-[530px] h-[351px]  border-0 border-black   " >
                <div className="w-[530px] h-[136px]">

            <div>
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="Text"
                />
                
            </div>

            
          <h2 className="text-6xl leading-[68px] font-bold text-gray-800 relative ">
            Enjoy Healthy Life & Tasty Food.
                </h2>
            <div className="absolute right-0 top-16 mr-12">
                <Image
                    width={83} 
                    height={83}
                    src={star}
                    alt="" />
            </div>
                
                
          <p className="text-lg text-gray-600 mt-4 text-center">
            Explore our wide range of organic and tasty meals. Made fresh every day!
          </p>

          <div className="flex flex-col lg:flex-row gap-10">
          <button className="mt-6 px-12 py-4 bg-green-600 text-white font-bold rounded-md shadow-md hover:bg-green-700">
            show more
          </button>
          
        
          <button 
          className="mt-6 px-12 py-4 bg-white text-green-600 font-bold rounded-md shadow-md hover:bg-green-700">
            Place an order
          </button>
              </div>
              </div>
              </div>
          
          
        
      </section>
    );
  };
  
  export default Hero;
  