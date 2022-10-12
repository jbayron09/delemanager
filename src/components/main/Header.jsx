import {BiMenuAltLeft, BiUser} from "react-icons/bi";
import {Logo} from "./Logo";

export function Header(){
    return (
        <header className="w-full bg-pink-50 flex justify-between items-center">
            <button className="p-5">
                <BiMenuAltLeft/>
            </button>
            <Logo height="sm"/>
            <button className="p-5">
                <BiUser/>
            </button>
        </header>
    )
}