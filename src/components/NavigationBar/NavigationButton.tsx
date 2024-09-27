import Link from "next/link";

interface NavigationButtonProps {
    text: string;
    link: string;
    onClick?: () => void;
}

export const NavigationButton = ({text, link, onClick}: NavigationButtonProps) => {
    return (
        <Link href={link} onClick={onClick} className={"text-blue-200 rounded-lg hover:text-cyan-400 hover:bg-white p-4 font-bold"}>
            <p>{text}</p>
        </Link>
    );
}