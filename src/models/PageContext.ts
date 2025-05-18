export default interface PageContextData {
    url: string;
    showMenu: boolean;
    setUrl: (url: string) => void;
    setShowMenu: (showMenu: boolean) => void;
}