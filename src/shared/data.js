import { MdPerson, MdPerson2, MdOutlineDevicesOther, MdCategory, MdDashboard, MdDocumentScanner, MdOutlineSettings } from "react-icons/md";
import { TbDeviceDesktopDown, TbDeviceDesktopShare } from "react-icons/tb";
export const data = [
    { name: "Users", path: '/users', icon: MdPerson2 },
    { name: "Suppliers", path: "/suppliers", icon: MdPerson },
    { name: "Items", path: "/items", icon: MdOutlineDevicesOther},
    { name: "Stock In", path: "/stock-in", icon: TbDeviceDesktopDown},
    { name: "Stock Out", path: "/stock-out", icon: TbDeviceDesktopShare},
    { name: "Categories", path: "/categories", icon: MdCategory}, 
    { name: "Dashboard", path: "/dashboard", icon: MdDashboard}, 
    { name: "Reports", path: "/reports", icon: MdDocumentScanner}, 
    { name: "Settings", path: "/settings", icon: MdOutlineSettings} 
]