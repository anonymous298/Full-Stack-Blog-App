import SideBar from "@/components/AdminComponents/SideBar";

export default function Layout({children}) {
    return (
        <div className="flex">
            <SideBar />

            <div className="w-[70vw] min-h-screen">
                {children}
            </div>
        </div>
    )
}