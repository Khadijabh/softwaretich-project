import React, { useState } from 'react';
import { FaShieldAlt, FaServer, FaWifi, FaBoxOpen, FaTruck, FaFire, FaNetworkWired } from 'react-icons/fa';
import './Products.css';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
import Footer from "../../components/Footer";
import FG60F from "../../assets/Product/hardware/FG-60F.png";
import mx64 from "../../assets/Product/hardware/mx64.jpg";
import FG100F from "../../assets/Product/hardware/FG-100F.jpg";
import firepower1010 from "../../assets/Product/hardware/firepower1010.jpg";
import FG40F from "../../assets/Product/hardware/FG-40F.png";
import mx84 from "../../assets/Product/hardware/mx84.jpg";
import fortirouter401e from "../../assets/Product/hardware/fortirouter401e.png";
import rv340 from "../../assets/Product/hardware/rv340.jpg";
import red20 from "../../assets/Product/hardware/red20.jpg";
import fortirouter60d from "../../assets/Product/hardware/fortirouter60d.jpg";
import isr4331 from "../../assets/Product/hardware/isr4331.jpg";
import xgs87 from "../../assets/Product/hardware/xgs87.jpg";
import catalyst2960x from "../../assets/Product/hardware/catalyst2960x.jpg";
import fortiswitch148f from "../../assets/Product/hardware/fortiswitch148f.jpg";
import cs11024 from "../../assets/Product/hardware/cs110-24.jpg";
import sg35028 from "../../assets/Product/hardware/sg350-28.jpg";
import fortiswitch124e from "../../assets/Product/hardware/fortiswitch124e.png";
import cs21048p from "../../assets/Product/hardware/cs210-48p.jpg";
import aironet1832i from "../../assets/Product/hardware/aironet1832i.jpg";
import fortiap231f from "../../assets/Product/hardware/fortiap231f.png";
import apx320 from "../../assets/Product/hardware/apx320.png";
import mr36 from "../../assets/Product/hardware/mr36.jpg";
import fortiap421ev from "../../assets/Product/hardware/fortiap421e.png";
import ap6420 from "../../assets/Product/hardware/ap6420.png";
import merakiZ3 from "../../assets/Product/hardware/meraki-z3.jpg";
import fortiextender201e from "../../assets/Product/hardware/fortiextender-201e.png";
import red60 from "../../assets/Product/hardware/red60.jpg";
import merakiGoGR12 from "../../assets/Product/hardware/meraki-go-gr12.jpg";
import fortiap321c from "../../assets/Product/hardware/fortiap321c.png";
import apx530 from "../../assets/Product/hardware/apx530.jpg";
import soc from "../../assets/Product/software/soc.jpg";
import mdr from "../../assets/Product/software/mdr.png";
import xdr from "../../assets/Product/software/xdr.png";
import edr from "../../assets/Product/software/edr.png";



const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: ["Firewalls", "Routers", "Switches", "Access Points", "Wireless Networks"],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: ["EDR", "XDR", "MDR", "SOC"],
            key: "software"
        }
    ];

    // Liste étendue de produits avec images
    const productsData = [
        // Hardware Products
        {
    id: 1,
    name: "Fortinet FortiGate FG-60F",
    categoryId: 0,
    category: "Hardware",
    details: "Advanced Firewall",
    brand: "Fortinet",
    photo: FG60F,
    prix: "",
    categoryKey: "firewalls"
  },
  {
    id: 13,
    name: "Cisco Meraki MX64",
    categoryId: 0,
    category: "Hardware",
    details: "Advanced Firewall",
    brand: "Cisco",
    photo: mx64,
    prix: "",
    categoryKey: "firewalls"
  },
  {
    id: 14,
    name: "Fortinet FortiGate FG-100F",
    categoryId: 0,
    category: "Hardware",
    details: "High-Performance Enterprise Firewall",
    brand: "Fortinet",
    photo: FG100F,
    prix: "",
    categoryKey: "firewalls"
  },
  {
    id: 15,
    name: "Cisco Firepower 1010",
    categoryId: 0,
    category: "Hardware",
    details: "NGFW with integrated threat defense",
    brand: "Cisco",
    photo: firepower1010,
    prix: "",
    categoryKey: "firewalls"
  },
  {
    id: 16,
    name: "Fortinet FortiGate FG-40F",
    categoryId: 0,
    category: "Hardware",
    details: "Secure SD-WAN and Firewall",
    brand: "Fortinet",
    photo: FG40F,
    prix: "",
    categoryKey: "firewalls"
  },
  {
    id: 17,
    name: "Cisco Meraki MX84",
    categoryId: 0,
    category: "Hardware",
    details: "Cloud-managed security appliance",
    brand: "Cisco",
    photo: mx84,
    prix: "",
    categoryKey: "firewalls"
  },
        {
    id: 2,
    name: "Fortinet FortiRouter 401E",
    categoryId: 4,
    category: "Hardware",
    details: "High-Performance Secure Router",
    brand: "Fortinet",
    photo: fortirouter401e,
    prix: "",
    categoryKey: "routers"
  },
  {
    id: 3,
    name: "Cisco RV340",
    categoryId: 4,
    category: "Hardware",
    details: "Dual WAN Gigabit VPN Router",
    brand: "Cisco",
    photo: rv340,
    prix: "",
    categoryKey: "routers"
  },
  {
    id: 4,
    name: "Sophos RED 20",
    categoryId: 4,
    category: "Hardware",
    details: "Remote Ethernet Device Router",
    brand: "Sophos",
    photo:red20,
    prix: "",
    categoryKey: "routers"
  },
  {
    id: 5,
    name: "Fortinet FortiRouter 60D",
    categoryId: 4,
    category: "Hardware",
    details: "Secure Branch Connectivity Router",
    brand: "Fortinet",
    photo: fortirouter60d,
    prix: "",
    categoryKey: "routers"
  },
  {
    id: 6,
    name: "Cisco ISR 4331",
    categoryId: 4,
    category: "Hardware",
    details: "Integrated Services Router",
    brand: "Cisco",
    photo: isr4331,
    prix: "",
    categoryKey: "routers"
  },
  {
    id: 7,
    name: "Sophos XGS 87",
    categoryId: 4,
    category: "Hardware",
    details: "Router with Next-Gen Firewall Capabilities",
    brand: "Sophos",
    photo: xgs87,
    prix: "",
    categoryKey: "routers"
  },
       {
    id: 4,
    name: "Cisco Catalyst 2960-X",
    categoryId: 3,
    category: "Hardware",
    details: "Gigabit Ethernet Switch with Layer 2/3 features",
    brand: "Cisco",
    photo: catalyst2960x,
    prix: "",
    categoryKey: "switches"
  },
  {
    id: 5,
    name: "Fortinet FortiSwitch 148F",
    categoryId: 3,
    category: "Hardware",
    details: "Managed Switch with Secure Access",
    brand: "Fortinet",
    photo: fortiswitch148f,
    prix: "",
    categoryKey: "switches"
  },
  {
    id: 6,
    name: "Sophos CS110-24",
    categoryId: 3,
    category: "Hardware",
    details: "Cloud-managed Layer 2 Access Switch",
    brand: "Sophos",
    photo: cs11024,
    prix: "",
    categoryKey: "switches"
  },
  {
    id: 7,
    name: "Cisco SG350-28",
    categoryId: 3,
    category: "Hardware",
    details: "28-Port Gigabit Managed Switch",
    brand: "Cisco",
    photo: sg35028,
    prix: "",
    categoryKey: "switches"
  },
  {
    id: 8,
    name: "Fortinet FortiSwitch 124E",
    categoryId: 3,
    category: "Hardware",
    details: "Secure and Scalable Ethernet Switch",
    brand: "Fortinet",
    photo: fortiswitch124e,
    prix: "",
    categoryKey: "switches"
  },
  {
    id: 9,
    name: "Sophos CS210-48P",
    categoryId: 3,
    category: "Hardware",
    details: "48-Port PoE Cloud-Managed Switch",
    brand: "Sophos",
    photo: cs21048p,
    prix: "",
    categoryKey: "switches"
  },
        {
    id: 6,
    name: "Cisco Aironet 1832i",
    categoryId: 5,
    category: "Hardware",
    details: "Dual-Band 802.11ac Wave 2 Access Point",
    brand: "Cisco",
    photo:aironet1832i,
    prix: "",
    categoryKey: "access-point"
  },
  {
    id: 7,
    name: "Fortinet FortiAP 231F",
    categoryId: 5,
    category: "Hardware",
    details: "WiFi 6 Indoor Access Point",
    brand: "Fortinet",
    photo: fortiap231f,
    prix: "",
    categoryKey: "access-point"
  },
  {
    id: 8,
    name: "Sophos APX 320",
    categoryId: 5,
    category: "Hardware",
    details: "Cloud-managed Dual-Radio Access Point",
    brand: "Sophos",
    photo: apx320,
    prix: "",
    categoryKey: "access-point"
  },
  {
    id: 9,
    name: "Cisco Meraki MR36",
    categoryId: 5,
    category: "Hardware",
    details: "Cloud-managed WiFi 6 Access Point",
    brand: "Cisco",
    photo: mr36,
    prix: "",
    categoryKey: "access-point"
  },
  {
    id: 10,
    name: "Fortinet FortiAP U421EV",
    categoryId: 5,
    category: "Hardware",
    details: "Outdoor Dual-Band Access Point",
    brand: "Fortinet",
    photo: fortiap421ev ,
    prix: "",
    categoryKey: "access-point"
  },
  {
    id: 11,
    name: "Sophos AP6 420",
    categoryId: 5,
    category: "Hardware",
    details: "Next-gen WiFi 6 Access Point",
    brand: "Sophos",
    photo: ap6420 ,
    prix: "",
    categoryKey: "access-point"
  },
        {
    id: 7,
    name: "Cisco Meraki Z3",
    categoryId: 7,
    category: "Hardware",
    details: "Teleworker Wireless Gateway",
    brand: "Cisco",
    photo: merakiZ3 ,
    prix: "",
    categoryKey: "wireless"
  },
  {
    id: 8,
    name: "Fortinet FortiExtender 201E",
    categoryId: 7,
    category: "Hardware",
    details: "4G LTE Wireless WAN Extender",
    brand: "Fortinet",
    photo: fortiextender201e ,
    prix: "",
    categoryKey: "wireless"
  },
  {
    id: 9,
    name: "Sophos RED 60",
    categoryId: 7,
    category: "Hardware",
    details: "Remote Ethernet Device with wireless support",
    brand: "Sophos",
    photo: red60,
    prix: "",
    categoryKey: "wireless"
  },
  {
    id: 10,
    name: "Cisco Meraki Go GR12",
    categoryId: 7,
    category: "Hardware",
    details: "Indoor Wireless Access Point with Cloud Management",
    brand: "Cisco",
    photo: merakiGoGR12 ,
    prix: "",
    categoryKey: "wireless"
  },
  {
    id: 11,
    name: "Fortinet FortiAP 321C",
    categoryId: 7,
    category: "Hardware",
    details: "Wireless Access Point with Integrated Controller",
    brand: "Fortinet",
    photo: fortiap321c ,
    prix: "",
    categoryKey: "wireless"
  },
  {
    id: 12,
    name: "Sophos APX 530",
    categoryId: 7,
    category: "Hardware",
    details: "High-performance Wireless Network Device",
    brand: "Sophos",
    photo: apx530 ,
    prix: "",
    categoryKey: "wireless"
  },


        // Software Products
        { id: 9, name: "SOC Elite", categoryId: 8, category: "Software", details: "Security Operations Center", brand: "BrandG", photo: soc, prix: "", categoryKey: "soc" },
        { id: 10, name: "MDR Shield", categoryId: 10, category: "Software", details: "Managed Detection & Response", brand: "BrandH", photo: mdr, prix: "", categoryKey: "mdr" },
        { id: 11, name: "XDR Defender", categoryId: 10, category: "Software", details: "Extended Detection & Response", brand: "BrandI", photo: xdr, prix: "", categoryKey: "xdr" },
        { id: 12, name: "EDR Sentinel", categoryId: 11, category: "Software", details: "Endpoint Detection & Response", brand: "BrandJ", photo: edr, prix: "", categoryKey: "edr" },

    ];

    const filteredProducts = productsData.filter(product => 
        activeCategory === 'all' || product.categoryKey === activeCategory
    );

    const handleCategoryClick = (item) => {
        const categoryMap = {
            'Firewalls': 'firewalls',
            'Routers': 'routers',
            'Switches': 'switches',
            'Access Points': 'access-point',
            'Wireless Networks': 'wireless',
            'EDR': 'edr',
            'XDR': 'xdr',
            'MDR': 'mdr',
            'SOC': 'soc',

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
                                            className={`category-item ${activeCategory === item.toLowerCase() ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="products-column">
                        {filteredProducts.length === 0 ? (
                            <div className="no-products-message">No products found in this category</div>
                        ) : (
                            <div className="products-grid">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={`prod-${product.id}`} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: 200 }} />
        </div>
    );
};

const ProductCard = ({ product }) => {
    const badgeColor = getBadgeColor(product.name);
    const borderColor = getBorderColor(product.details);

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {product.photo && (
                <div className="product-image-container">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {product.name}
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="product-price">Price not available</div>
            <h3 className="product-name">{product.details}</h3>
            <div className="product-info">
                <span className="stock-info">{product.brand}</span>
            </div>
        </div>
    );
};

const getBadgeColor = (name) => '#1abc9c';
const getBorderColor = (name) => '#1abc9c';

export default Products;
