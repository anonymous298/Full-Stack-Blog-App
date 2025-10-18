import Navbar from "@/components/AdminComponents/Navbar";
import SideBar from "@/components/AdminComponents/SideBar";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({children}) {
    return (
        <div className="flex">
            <ToastContainer theme="dark" />
            
            <SideBar />

            <div className="w-[74vw] min-h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    )
}