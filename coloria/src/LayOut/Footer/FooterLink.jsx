import { Button } from "@mui/material"
import { useNavigate, Link } from "react-router-dom"

export function FooterLink({ title, Linkos }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(Linkos);
    };

    return (
        <Link onClick={handleClick}>{title}</Link>
    );
}
