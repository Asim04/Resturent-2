import Image from "next/image";
import img1 from "../../../public/Image/FooterTop/image1.png"
import img2 from "../../../public/Image/FooterTop/image2.png"
import img3 from "../../../public/Image/FooterTop/img3.png"
import img4 from "../../../public/Image/FooterTop/img4.png"
import img5 from "../../../public/Image/FooterTop/img5.png"
import img6 from "../../../public/Image/FooterTop/img6.png"
import bg1 from "../../../public/Image/FooterTop/bg1.png"
import bg2 from "../../../public/Image/FooterTop/bg2.png"
import bg3 from "../../../public/Image/FooterTop/bg3.png"
import bg4 from "../../../public/Image/FooterTop/bg4.png"
import bg5 from "../../../public/Image/FooterTop/bg5.png"
import bg6 from "../../../public/Image/FooterTop/bg6.png"

const FooterTop = () => {
    return (
      <footer className="bg-gray-100 pt-40">
        <h4 className="text-5xl text-center font-bold text-[#000000] mb-[53px]">We work with the best pepole</h4>
        {/* Top Section: Logos */}
        <div className="py-8 border-b border-gray-300 w-[1320] h-[299] mb-[54px]">
          <div className="container mx-auto flex justify-center gap-16 flex-wrap">
            <Image 
            src={img1}
            width={150}
            height={128}
            alt="Restaurant" 
            className="" />

            <Image 
            src={img2}
            width={100}
            height={128}
            alt="Bakery"
            className="" />

            <Image
            src={img3}
            width={70}
            height={100}
            alt="Fork & Spoon"
            className="" />

            <Image
            src={img4}
            width={100}
            height={128}
            alt="Wolf Coffee"
            className="" />

            <Image
            src={img5}
            width={120}
            height={128}
            alt="Bistro"
            className=""/>

            <Image 
            src={img6}
            width={80}
            height={100}
            alt="Bakery 2"
            className="" />

          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Newsletter Section */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#000000]">Foodtuck</h4>
              <p className="text-[#000000] mb-4">
                Subscribe our newsletter and get discount 25% off
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-1 py-2 border border-gray-300 rounded-l-md"
                />
                <button className="px-2 py-2 bg-green-600 text-white rounded-r-md">
                  ➤
                </button>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-red-500">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-700">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
  
            {/* Contact Us */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#000000]">Contact Us</h4>
              <ul className="space-y-3 text-gray-600">
                <li>karchi Bufferzone GIAIC Govenerhouse</li>
                <li>📞 0344-2015004</li>
                <li>📧 asimkhanr1@gmail.com</li>
                <li>🕒 monday - Sat / 10:00 AM - 8:00 PM</li>
              </ul>
            </div>
  
            {/* Links */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#000000]">Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Instagram Gallery */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#000000]">Instagram Gallery</h4>
              <div className="grid grid-cols-3 gap-2">
                <Image
                  src={bg1}
                  alt="Food 1"
                  className="w-full h-20 object-cover"
                />
                <Image
                  src={bg2}
                  alt="Food 2"
                  className="w-full h-20 object-cover"
                />
                <Image
                  src={bg3}
                  alt="Food 3"
                  className="w-full h-20 object-cover"
                />
                <Image
                  src={bg4}
                  alt="Food 4"
                  className="w-full h-20 object-cover"
                />
                <Image
                  src={bg5}
                  alt="Food 5"
                  className="w-full h-20 object-cover"
                />
                <Image
                  src={bg6}
                  alt="Food 6"
                  className="w-full h-20 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterTop;
  