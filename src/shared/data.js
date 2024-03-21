import { MdPerson, MdPerson2, MdOutlineDevicesOther, MdCategory, MdDashboard, MdDocumentScanner, MdOutlineSettings } from "react-icons/md";
import { TbArrowBarUp, TbArrowBarToDown } from "react-icons/tb";

export const data = [
    { name: "Item List", path: "/items", icon: MdOutlineDevicesOther},
    { name: "Stock In", path: "/stock-in", icon: TbArrowBarToDown},
    { name: "Stock Out", path: "/stock-out", icon: TbArrowBarUp},
    { name: "Categories", path: "/categories", icon: MdCategory}, 
    { name: "Users", path: '/users', icon: MdPerson2 },
    { name: "Suppliers", path: "/suppliers", icon: MdPerson },
    { name: "Dashboard", path: "/dashboard", icon: MdDashboard}, 
    { name: "Reports", path: "/reports", icon: MdDocumentScanner}, 
    { name: "Settings", path: "/settings", icon: MdOutlineSettings} 
]