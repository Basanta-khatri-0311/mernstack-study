import React from "react"
import NavTwo from "./Nav2"

function AppHeader(){
        return(
            <>
            <nav className="bg-emerald-950 flex py-5 px-10 items-center justify-between">
                <h2 className="text-2xl">Logo-Here</h2>
                <NavTwo />
            </nav>
            </>
        )
    }
export default AppHeader