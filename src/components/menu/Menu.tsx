'use client';

import menu_styles from './menu.module.css';
import text_styles from "@/css/text.module.css";
import MenuOption from './MenuOption';


export default function Menu() {  
    
    return <>
        <div className={menu_styles.menu}>
                <div className={menu_styles.mediaBar}>
                    <span className={text_styles.medium}>
                        Contact our <b>Executive Board</b> at <b>ccr-contact@mtu.edu</b>
                    </span>
                </div>
                <ul>
                    <MenuOption option="home" title="About Us" />
                    <MenuOption option="volunteering" title="Volunteering" />
                    <MenuOption option="sponsoring" title="Sponsoring" />
                    <MenuOption secondary option="ri3d" title="Robot in 3 Days" />
                </ul>
            </div>
    </>
}