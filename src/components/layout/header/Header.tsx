import { FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdSell } from "react-icons/md";
import NavLink from "./header-components/NavLink";
import Hamburguer from "./header-components/Hamburguer";
import SearchInput from "./header-components/Input/SearchInput";
import Avatar from "./header-components/Avatar";
import HeaderLogo from "./header-components/HeaderLogo";
import CartPopover from "./header-components/cart/Cart";

export default function Header() {
  return (
    <header className="header flex fixed h-28 w-full justify-between items-center bg-cultiva-black shadow-md z-50">
      <div className="flex gap-5 items-center">
        <HeaderLogo />
        <div className="flex gap-5 justify-between content-center">
          <NavLink href="#">
            <MdSell className="text-2xl"/>
            Vender
          </NavLink>
          <SearchInput />
        </div>
      </div>
      <nav className="inline-flex items-center gap-3 mr-8">
        <NavLink href="#">
          <FaBookmark className="text-2xl" />
          Favoritos
        </NavLink>
        <NavLink href="#">
          <IoIosNotifications className="text-2xl" />
          Notificações
        </NavLink>
        <CartPopover />
        <Hamburguer />
        <Avatar />
      </nav>
    </header>
  )
}