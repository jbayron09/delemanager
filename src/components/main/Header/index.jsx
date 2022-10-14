import {BiMenuAltLeft, BiUser} from "react-icons/bi";
import Logo from "components/main/Logo";
import HeaderBtn from "components/main/Header/components/HeaderBtn";

export default function Header(){
    return (
        <header className="w-full flex justify-between items-center bg-white">
            <HeaderBtn>
                <BiMenuAltLeft/>
            </HeaderBtn>
            <Logo height="sm"/>
            <HeaderBtn>
                <BiUser/>
            </HeaderBtn>
        </header>
    )
}