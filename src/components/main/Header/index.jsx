import {Logo} from "components/main/Logo";
import {BiMenuAltLeft, BiUser} from "react-icons/bi";
import {HeaderBtn} from "components/main/Header/components/HeaderBtn";

export function Header(){
    return (
        <header className="w-full flex justify-between items-center">
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