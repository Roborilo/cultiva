import cultivaLogo from "@/../public/logo.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils/utils";
import { FaSearch } from "react-icons/fa";
import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdSell } from "react-icons/md";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})

export default function Header() {
  return (
    <header className="header flex fixed h-28 w-full justify-between items-center bg-cultiva-black shadow-md">
      <div className="flex gap-5 items-center">
        <a href="#" className="inline-flex justify-center items-center h-full">
          <Image className="ml-5 h-20 w-20" src={cultivaLogo} alt="Logo da Cultiva" />
          <span className={cn("text-3xl text-white font-semibold mt-2 -translate-x-2", poppins.className)}>Cultiva</span>
        </a>
        <div className="flex gap-5 justify-between content-center">
          <a href="#" className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1"><MdSell className="text-2xl"/>Vender</a>
          <div className="flex justify-center">
            <div className="inline-flex w-9 rounded-tl-3xl rounded-bl-3xl justify-center items-center bg-black">
              <FaSearch className="text-2xl text-white" />
            </div>
            <input type="search" name="" id="search" className="w-64 rounded-tr-3xl rounded-br-3xl text-white bg-black text-xl font-semibold px-2" placeholder="Pesquisar" />
          </div>
        </div>
      </div>
      <nav className="inline-flex items-center gap-3 mr-8">
        <a href="#" className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
          <FaBookmark className="text-2xl" />
          Favoritos
        </a>
        <a href="#" className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
          <IoIosNotifications className="text-2xl" />
          Notificações
        </a>
        <a href="#" className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
          <FaShoppingCart className="text-2xl" />
          Carrinho
        </a>
        <div className="hamburger inline-flex w-10 h-8 mx-2 justify-between items-center cursor-pointer">
          <div className="ham rounded-[50px] h-2.5 w-2.5 bg-white"></div>
          <div className="ham rounded-[50px] h-2.5 w-2.5 bg-white"></div>
          <div className="ham rounded-[50px] h-2.5 w-2.5 bg-white"></div>
        </div>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" className="h-16 w-16 rounded-full" />
      </nav>
    </header>
  )
}