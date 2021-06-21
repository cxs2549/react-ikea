import React from "react"
import { Link } from "react-router-dom"
import logoBox from "../../../assets/ikea-logo-box.svg"
import footerImg from "../../../assets/footer-daylight.png"
import styled from "styled-components"

const StyledFooter = styled.footer`
    background: #ece8e3;

    #top {
        padding: 40px 20px;
        text-align: center;
        h2 {
            font-size: 2rem;
            line-height: 1.2;
            font-weight: 600;
            margin-bottom: 1.5rem;
            @media screen and (min-width: 1280px) {
                font-size: 3rem;
            }
        }
    }
    #center {
        height: 300px;
    }
    #bottom {
        background: #084392;
        color: white;
        padding: 30px;
    }
`

const Footer = () => {
    const links = [
        { name: "about us", to: "/about-us" },
        { name: "life at home", to: "/life-at-home" },
        { name: "sustainability", to: "/sustainability" },
        { name: "work with us", to: "/work-with-us" },
        { name: "newsroom", to: "/newsroom" },
    ]
    return (
        <StyledFooter>
            <div id="top">
                <h2>A world of Inspiration for your home</h2>
                <img src={logoBox} className="mx-auto mb-5 w-32" alt="" />
                <div className="flex whitespace-nowrap flex-wrap justify-center gap-x-5 w-10/12 mx-auto capitalize mb-8">
                    {links.map((link) => (
                        <Link key={link.name} to={link.to}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div id="center">
                <img src={footerImg} className="object-cover h-full" alt="" />
            </div>
            <div id="bottom">
                <div className="flex justify-center mb-6 w-full">
                    <Link to="/cookie-info" className="">
                        Cookie Information
                    </Link>
                </div>
                <p className="text-center text-sm pb-8">
                    © SuperVision Design for Inter IKEA Systems B.V. 1999 - 2021
                </p>
            </div>
        </StyledFooter>
    )
}

export default Footer
