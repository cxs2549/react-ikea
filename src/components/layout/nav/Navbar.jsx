import styled from "styled-components"
import MenuButton from "./menu/MenuButton"
import logo from "../../../assets/logo.svg"
import { TruckIcon, UserIcon, HeartIcon, ShoppingBagIcon, LocationMarkerIcon } from "@heroicons/react/outline"
import { Link, NavLink } from "react-router-dom"
import Searchbar from "./searchbar/Searchbar"

const Header = styled.header`
    background: #084392;
    nav:first-child {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 1rem;
        position: relative;
        z-index: 200;
        gap: 1rem;
        @media screen and (min-width: 1280px) {
            padding-left: 1rem;
        }
    }
`

const Navbar = () => {
    const links = [
        { name: "home", to: "/" },
        { name: "products", to: "/products" },
        { name: "rooms", to: "/rooms" },
        { name: "deals", to: "/deals" },
    ]

    return (
        <Header>
            <nav>
                <div className="flex items-center flex-grow">
                    <div className="mt-1 xl:hidden">
                        <MenuButton />
                    </div>
                    <Link to="/" className="md:mr-2 xl:mr-0">
                        <img src={logo} alt="" className="w-40  mb-1" />
                    </Link>

                    <div className="hidden xl:flex space-x-8 ml-6 mr-3 capitalize font-medium text-white text-opacity-60">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                end={true}
                                activeClassName="text-opacity-100 text-white"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden md:flex flex-grow">
                        <Searchbar />
                    </div>
                </div>
                <div className="flex items-center text-white ">
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 sm:mr-3 xl:mr-5 sm:border rounded-full cursor-pointer">
                        <LocationMarkerIcon className="h-6 w-6 " />
                        <p className="text-sm font-semibold hidden sm:block">Burbank</p>
                    </div>
                    <div className="flex space-x-4 xl:space-x-6">
                        <TruckIcon className="h-6 w-6  cursor-pointer hidden xl:block" />
                        <LocationMarkerIcon className="h-6 w-6  cursor-pointer md:hidden" />
                        <UserIcon className="h-6 w-6  cursor-pointer" />
                        <HeartIcon className="h-6 w-6  cursor-pointer" />
                        <ShoppingBagIcon className="h-6 w-6  cursor-pointer" />
                    </div>
                </div>
            </nav>
            <nav className="pb-3 pt-1 md:hidden">
                <Searchbar />
            </nav>
        </Header>
    )
}

export default Navbar
