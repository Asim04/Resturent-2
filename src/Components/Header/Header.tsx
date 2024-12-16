import Link from 'next/link';
import Image from 'next/image';
import bgpic from "../../../public/Image/Headerpic/Bg.png"
import bg2 from "../../../public/Image/Headerpic/Bg2.png"
import bg3 from "../../../public/Image/Headerpic/bg3.png"
import bg4 from "../../../public/Image/Headerpic/bg4.png"
import bg5 from "../../../public/Image/Headerpic/bg5.png"

const Header = () => {
  return (
    <header className="bg-white shadow-md  w-full z-10 relative  ">

            
            <div className='hidden lg:block'>
        <div className='absolute top-2  right-7 w-[80] h-80 z-0 '>    
            <Image
                
                src={bgpic}
                width={400}
                height={400}
                // layout="fill"
                objectFit='cover'
                alt="Header bg"
            />
        </div>


        <div className='absolute top-2  right-7 w-[80] h-80 mr-14 mt-10 z-10 '>    
            <Image
                
                src={bg2}
                width={300}
                height={300}
                // layout="fill"
                objectFit='cover'
                alt="Header bg"
            />
        </div>


        <div className='absolute top-2  right-7 w-[80] h-80 mr-32 mt-10 transform rotate-90 '>    
            <Image
                
                src={bg3}
                width={300}
                height={300}
                // layout="fill"
                objectFit='cover'
                alt="Header bg"
            />
        </div>


        <div className='absolute top-2  right-7 w-[80] h-80 mr-72 mt-20 z-0 transform rotate-7 '>    
            <Image
                
                src={bg4}
                width={100}
                height={100}
                // layout="fill"
                objectFit='cover'
                alt="Header bg"
            />
        </div>


        <div className='absolute top-2  right-7 w-[80] h-80 mr-52 mt-60 z-0 transform -rotate-7 '>    
            <Image
                
                src={bg5}
                width={100}
                height={100}
                // layout="fill"
                objectFit='cover'
                alt="Header bg"
            />
        </div>

        </div>
        

      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">


        <h1 className="text-2xl font-bold text-black gap-2">Foodtruck</h1>

        

        <nav className="space-x-4 flex mx-auto justify-between gap-4">
        <ul className='flex space-x-4 justify-between gap-4'>  
            <Link href="/"><li className="text-gray-800 hover:text-green-600">Home</li></Link>
            <Link href="/menu"><li className="text-gray-800 hover:text-green-600">Menu</li></Link>
            <Link href="/menu"><li className="text-gray-800 hover:text-green-600">Blog</li></Link>
            <Link href="/menu"><li className="text-gray-800 hover:text-green-600">Pages</li></Link>
            <Link href="/about"><li className="text-gray-800 hover:text-green-600">About</li></Link>
            <Link href="/about"><li className="text-gray-800 hover:text-green-600">Shop</li></Link>
            <Link href="/contact"><li className="text-gray-800 hover:text-green-600">Contact</li></Link>
        </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
