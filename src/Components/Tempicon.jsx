import React from 'react'
import { useGlobalContext } from "../Context";
import { BsFillSunFill } from 'react-icons/bs';
import { AiFillCloud } from 'react-icons/ai';
import { IoMdRainy } from 'react-icons/io';

const Tempicon = () => {
    const { weather } = useGlobalContext();
    const [tempStatus] = weather

    if (tempStatus === "Sunny") {
        return (
            <BsFillSunFill className="fas" style={{ color: "#eccc68" }} />
        )
    } else if (tempStatus === "Clouds") {
        return (
            <AiFillCloud className="fas" style={{ color: '#f1f2f6' }} />
        )
    } else if (tempStatus === "Rainy") {
        return (
            <IoMdRainy className="fas" style={{ color: '#f1f2f6' }} />
        )
    } else {
        return (
            <BsFillSunFill className="fas" style={{ color: "#eccc68" }} />
        )
    }
}

export default Tempicon
