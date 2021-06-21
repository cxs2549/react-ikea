import { NavLink } from "react-router-dom"
import styled from "styled-components"
const StyledMenu = styled.div`
    position: fixed;
    top: 116px;
    width: 75%;
    max-width: 500px;
    height: 100vh;
    background: #084392;
    display: flex;
    flex-direction: column;
    padding-top: 16rem;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.4s;
    transition-delay: 0.2s;
    @media screen and (min-width: 768px) {
        top: 65px;
    }
    a {
        text-transform: capitalize;
        margin-left: 3.55rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.25rem;
        &:hover {
            opacity: 1;
        }
    }
`
const Menu = ({ open, close }) => {
    const links = [
        { name: "home", to: "/" },
        { name: "products", to: "/products" },
        { name: "rooms", to: "/rooms" },
        { name: "deals", to: "/deals" },
    ]
    return (
        <StyledMenu open={open} className="text-white text-opacity-70">
            {links.map((link) => (
                <NavLink
                    onClick={close}
                    key={link.name}
                    to={link.to}
                    end={true}
                    activeClassName="text-white text-opacity-100"
                >
                    {link.name}
                </NavLink>
            ))}
        </StyledMenu>
    )
}

export default Menu
