import Image from "next/image";
import cake from "../../../public/Image/Food-Catagiry/Grand Italiano.png"
import Cak2 from "../../../public/Image/Food-Catagiry/Grand Italiano (2).png"

const FoodCategory = () => {
    return (
      <section className="py-16 bg-gray-50" id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-8 text-[#333333] font-H">Food Categories</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
                src={cake}
                width={312}
                height={364}
               alt="Cupcake"
               className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4 text-black ">Cupcakes</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={Cak2} 
              height={364}
              width={312}
              alt="Salad" 
              className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4">Salads</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={cake}
              width={364}
              height={312}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Pasta</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={cake} 
              alt="Juice"
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Fresh Juices</h4>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FoodCategory;
  