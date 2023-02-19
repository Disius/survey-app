import { Outlet } from "react-router-dom";

export default function GuestLayout(){
    return(
        <div>
            Partes de un layout
            <Outlet/>
        </div>
    )
}