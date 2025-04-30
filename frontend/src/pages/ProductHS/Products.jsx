import React, { useState } from 'react';
import { FaShieldAlt, FaServer, FaWifi, FaBoxOpen, FaTruck, FaFire, FaNetworkWired } from 'react-icons/fa';
import './Products.css';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
// Import des images
import ciscoRouterImg from "../../assets/Product/routers1-cisco.png";
import RouterFImg from "../../assets/Product/routers-c881.png";
import Sophos from "../../assets/Product/Sophos-SdR.png";
import fortigate from"../../assets/Product/fortigate-router.png";
import fort from "../../assets/Product/FG90G.png";
import SophosF from "../../assets/Product/XGS-4300-front.png";
import SophosFirewall from "../../assets/Product/FirewallSho.png";
import SophosSwitch from "../../assets/Product/sophos-switch.png";
import ContactCard from "../../components/home/jsx/ContactCard";
import Footer from "../../components/Footer";

const Products = () => {
    <navbaar/>
    const [activeCategory, setActiveCategory] = useState('all');

    // Données des catégories
    const categories = [

        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: ["Firewalls", "Routers", "Switchs", "Access Point", "Wireless Networks"],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: ["EDR", "XDR", "MDR", "SOC"],
            key: "software"
        }
    ];

    // Données des produits
    const productsData = [
        {
            id: 1,
            title: "Recommended",
            name: "Cisco 4331 Integrated Services Router",
            image: ciscoRouterImg,
            price: "32,025.74 MAD",
            stock: "5472",
            change: "+1.82%",
            icon: <FaBoxOpen />,
            categories: ["routers"]
        },
        {
            id: 2,
            title: "Free delivery",
            name: "Routeur à services intégrés Cisco C881",
            image: RouterFImg,
            price: "1,616.55 MAD",
            stock: "158",
            change: "+0.76%",
            icon: <FaTruck />,
            categories: ["routers"]
        },
        {
            id: 3,
            title: "Sophos-Router ",
            name: "Sophos SD-RED 20 Rev. 1 Remote Ethernet Device R20ZTCHMR",
            image:Sophos,
            price: "2,200 MAD",
            stock: "483",
            change: "+0.52%",
            categories: ["routers"]
        },

        {
            id: 4,
            title: "-30%",
            name: "Router Fortinet FortiGate 80CM",
            image:fortigate,
            price: "2,200 MAD",
            stock: "483",
            change: "+0.52%",
            categories: ["routers"]
        },

        {
            id: 5,
            title: "Free delivery",
            name: "Fortinet FortiGate 90G",
            image: fort,
            price: "1,190.00 MAD",
            stock: "532",
            change: "+7.76%",
            categories: ["firewalls"]
        },
        {
            id: 6,
            title: "Promotion",
            name: "Sophos XGS 4300",
            image:SophosF,
            price: "580,00 MAD",
            stock: "5578",
            change: "+3.35%",
            icon: <FaFire />,
            categories: ["firewalls"]
        },

        {
            id: 7,
            title: "Recommended",
            name: "Sophos XG 230 Rev. 2 Firewall",
            image: SophosFirewall,
            price: "270 MAD",
            stock: "2367",
            change: "+1.82%",
            categories: ["firewalls"]
        },
        {
            id: 8,
            title: "Free delivery",
            name: "Sophos Switch CS110-24 – 24 port",
            image: SophosSwitch,
            price: "550 MAD",
            stock: "2322",
            change: "+3.35%",
            categories: ["switchs"]
        },
        {
            id: 9,
            title: "Sophos SD-RED 20 - Rev 1",
            name: "dispositif de télécommande",

            price: "6,024.00 MAD",
            stock: "834",
            change: "+0.96%",
            categories: ["switchs"]
        },
    ];

    // Fonction pour filtrer les produits
    const getFilteredProducts = () => {
        if (activeCategory === 'all') return productsData;

        return productsData.filter(product =>
            product.categories.includes(activeCategory) ||
            (activeCategory === 'hardware' &&
                (product.categories.includes('routers') ||
                    product.categories.includes('firewalls')))
        );
    };

    // Gestion du clic sur une sous-catégorie
    const handleCategoryClick = (item) => {
        const categoryMap = {
            "Firewalls": "firewalls",
            "Routers": "routers",
            "Switchs": "switchs",
            "Access Point": "access point",
            "Wireless Networks": "wireless networks",
            "EDR": "edr",
            "XDR": "xdr",
            "MDR": "mdr",
            "SOC": "soc"
        };

        setActiveCategory(categoryMap[item] || 'all');
    };

    return (
        <div className="products-page">
            <Header />
            <NavBar />
            <div className="products-container">
                <h1 className="main-header">Categories</h1>

                <div className="content-grid">
                    {/* Colonne des catégories */}
                    <div className="categories-column">
                        {categories.map((category, index) => (
                            <div key={`cat-${index}`} className="category-section">
                                <h2 className="category-title">
                                    {category.icon}
                                    {category.name}
                                </h2>
                                <ul className="category-list">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={`item-${index}-${i}`}
                                            className="category-item"
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Colonne des produits */}
                    <div className="products-column">
                        <div className="products-grid">
                            {getFilteredProducts().map((product) => (
                                <ProductCard key={`prod-${product.id}`} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer style={{ marginTop: 200}} />
            </div>
        </div>
    );
};

// Composant de carte produit
const ProductCard = ({ product }) => {
    const badgeColor = getBadgeColor(product.title);
    const borderColor = getBorderColor(product.title);
    const changeColor = product.change.startsWith('+') ? 'positive-change' : 'negative-change';

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {/* Section image du produit */}
            {product.image && (
                <div className="product-image-container">
                    <img
                        src={product.image}
                        alt={product.name || product.title}
                        className="product-image"
                    />
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {product.icon && <span className="badge-icon">{product.icon}</span>}
                {product.title}
            </div>

            <h3 className="product-name">
                {product.name || product.title}
            </h3>

            <div className="product-price">
                {product.price}
            </div>

            <div className="product-info">
                <span className="stock-info">{product.stock}</span>
                <span className={`change-info ${changeColor}`}>
                    {product.change}
                </span>
            </div>

        </div>

    );

};

// Fonctions d'aide pour les styles
const getBadgeColor = (title) => {
    switch(title.toLowerCase()) {
        case 'recommended': return '#3498db';
        case 'promotion': return '#e67e22';
        case 'free delivery': return '#2ecc71';
        case 'router hpenetworking': return '#9b59b6';
        default: return '#1abc9c';
    }
};

const getBorderColor = (title) => {
    switch(title.toLowerCase()) {
        case 'recommended': return '#3498db';
        case 'promotion': return '#e67e22';
        case 'free delivery': return '#2ecc71';
        case 'router hpenetworking': return '#9b59b6';
        default: return '#1abc9c';
    }

};

export default Products;