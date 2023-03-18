import { Outlet } from "react-router-dom"
import '../css/layout.css'
import Sidebar from "./Sidebar"


export function Layout () {
    return (
        <div>
            <div className="layout-container">
              <Sidebar />
              <Outlet />
            </div>
        </div>
    )
}