import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import onClickOutside from "utils/onClickOutside";

export default function DropDown({setShowProfile, dropDownRef, className}) {
    const links = [
        { label: 'Mi perfil', href: '/dashboard'},
        { label: 'Salir', href: '/auth/logout'}
    ]
    const [listening, setListening] = useState(false);

    useEffect(onClickOutside(
        listening,
        setListening,
        dropDownRef,
        setShowProfile
    ));

    return (
        <div className={classNames(["bg-white rounded-md shadow-md", className && className])}>
            <div className="p-5 border-b border-gray-50">
                <p className="text-base leading-6 font-semibold text-gray-700">El Byron Hernández</p>
                <p className="text-sm leading-5 font-normal text-gray-500">byroneldelamoto@gmail.com</p>
            </div>
            <div className="w-full">
                {
                    links.map(link =>
                        <Link to={link.href} key={link.href}
                              className="block text-sm font-normal text-gray-700 px-5 leading-10">
                            {link.label}
                        </Link>
                    )
                }
            </div>
        </div>
    )
}