import Image from "next/image"
import img from "../../../public/Image/blog/unsplash_WBMi3TLZdZc.png"

const Blog = () => {
  return (
    <div>

<section className="py-16 bg-gray-50" id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-2 text-[#333333] font-H">Latest news & Blog</h3>
          <div className="w-[418px] h-[48px] mx-auto">
            <p className="tex-[16px] font-normal leading-6 text-center text-[#828282]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p></div>
          

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
                src={img}
                width={312}
                height={364}
               alt="Cupcake"
               className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4 text-black ">Cupcakes</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img} 
              height={364}
              width={312}
              alt="Salad" 
              className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4">Salads</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={img}
              width={364}
              height={312}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Pasta</h4>
            </div>


            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={img}
              width={364}
              height={312}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Pasta</h4>
            </div>

           
          </div>
          
        </div>
      </section>
      
    </div>
  )
}

export default Blog
