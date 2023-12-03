import {useState} from "react";
import './index.css';

export default function Header() {
    const [nameClassName, setNameClassName] = useState("");
    const [infoClassName, setInfoName] = useState("");

    const onNameClick = () => {
        setNameClassName("clicked");
    };

    const onInfoClick = () => {
        setInfoName("clicked");
    };

    return <>
        <h2
            className={nameClassName}
            onClick={onNameClick}
        >
            Білас Андрій Ігорович
        </h2>
        <p
            className={infoClassName}
            onClick={onInfoClick}
        >
            11 квітня 1998 року, Турка, Львівська Область
        </p>
        <p>3 курс ФІОТ</p>
    </>
}
