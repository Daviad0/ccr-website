import { useContext } from "react";
import menu_styles from "./menu.module.css";
import text_styles from "@/css/text.module.css";
import { PageContext } from "@/app/MainPage";

export default function MenuOption({
  option,
  title,
  secondary = false,
}: {
  title: string;
  option: string;
  secondary?: boolean;
}) {
  const page = useContext(PageContext);

  return (
    <li
      className={`${page.url == option ? menu_styles.selected : ""} ${secondary ? menu_styles.yellow : ""}`}
      onClick={() => {
        page.setUrl(option);
        page.setShowMenu(true);
      }}
      data-option={option}
    >
      <span className={text_styles.large}>{title}</span>
    </li>
  );
}
