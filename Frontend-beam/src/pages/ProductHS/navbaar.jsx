import { FaServer, FaShieldAlt } from "react-icons/fa";
import React from "react";

const navbaar = () => {
    return [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: ["Firewalls", "Routers", "Switchs", "Access Point", "Wireless Networks"]
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: ["EDR", "XDR" ,"MDR" , "SOC"]
        }
    ];
};

export default navbaar;