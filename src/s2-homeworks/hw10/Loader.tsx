import s from './Loader.module.css'
import React from "react";
import Logo from './Logo.svg'
import Spinn from "./Spinn.png";
export const Loader = () =>  {
    return (

        <img className={s.preload} src={Spinn}/>)
}