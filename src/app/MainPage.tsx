'use client'

import PageContextData from "@/models/PageContext";
import { createContext, useState } from "react";
import Menu from "../components/menu/Menu";


export const PageContext = createContext<PageContextData>({
    url: "home",
    showMenu: true,
    setUrl: (url: string) => {return url},
    setShowMenu: (showMenu: boolean) => {return showMenu}
});


export default function MainPage({children} : {
    children: React.ReactNode
}){
    const [page, setPage] = useState<string>("home");
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const pageContext: PageContextData = {
        url: page,
        showMenu: showMenu,
        setUrl: (url: string) => {
            console.log("setUrl", url);
            setPage(url);
            return url;
        },
        setShowMenu: (showMenu: boolean) => {
            setShowMenu(showMenu);
            return showMenu;
        }
    }

    return <>
        <PageContext.Provider value={pageContext}>
            <Menu />
            {children}
        </PageContext.Provider>
    </>


        
}