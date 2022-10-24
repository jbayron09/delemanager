import {BiMenuAltLeft, BiUser} from "react-icons/bi";
import {useRef, useState} from "react";
import Logo from "components/main/Logo";
import HeaderBtn from "components/main/Header/components/HeaderBtn";
import DropDown from "routes/Dashboard/DropDown";

export default function Header() {
    const dropDownRef = useRef(null)
    const [showProfile, setShowProfile] = useState(false)

    const handleProfileBtnClick = () => {
        if (!showProfile)
            setShowProfile(true)
        else
            setShowProfile(false)
    }

    return (
        <header ref={dropDownRef} className="relative w-full flex justify-between items-center bg-white">
            <HeaderBtn>
                <BiMenuAltLeft size="1.5em"/>
            </HeaderBtn>
            <Logo height="sm"/>
            <HeaderBtn onClick={handleProfileBtnClick}>
                <BiUser size="1.5em"/>
            </HeaderBtn>
            {
                showProfile
                &&
                <DropDown
                    className="absolute right-0 top-full m-2 z-10"
                    setShowProfile={setShowProfile}
                    dropDownRef={dropDownRef}
                />
            }
        </header>
    )
}