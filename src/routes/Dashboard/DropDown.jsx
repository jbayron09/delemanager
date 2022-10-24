import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import onClickOutside from "utils/onClickOutside";

export default function DropDown({setShowProfile, dropDownRef, className}) {
    const [listening, setListening] = useState(false);

    useEffect(onClickOutside(
        listening,
        setListening,
        dropDownRef,
        setShowProfile,
    ));

    return (
        <div className={classNames(["bg-white rounded-md shadow-md", className && className])}>
            <div className="p-5 border-b border-gray-50">
                <p className="text-base leading-6 font-semibold text-gray-700">El Byron Hernández</p>
                <p className="text-sm leading-5 font-normal text-gray-500">byroneldelamoto@gmail.com</p>
            </div>
            <div>
                <p className="text-sm font-normal text-gray-700 px-5 pt-4 pb-2">Mi perfil</p>
                <Link to="/auth/logout">
                    <p className="text-sm font-normal text-gray-700 px-5 pt-2 pb-4">Salir</p>
                </Link>
            </div>
        </div>
    )
}