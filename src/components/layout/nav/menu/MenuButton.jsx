import React, { useState, useCallback, useRef, useEffect } from "react"
import { HamburgerSlider } from "react-animated-burgers"
import Menu from "./Menu"
import Overlay from "./Overlay"

let useClickOutside = (handler) => {
    let menuRef = useRef()

    useEffect(() => {
        let outsideHandler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                handler()
            }
        }

        document.addEventListener("mousedown", outsideHandler)

        return () => {
            document.removeEventListener("mousedown", outsideHandler)
        }
    })

    return menuRef
}

const MenuButton = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(() => {
        setIsActive((prevState) => !prevState)
        document.body.classList.toggle("modal-open")
    }, [])

    let menuRef = useClickOutside(() => {
        setIsActive(false)
        document.body.classList.remove("modal-open")
    })

    return (
        <div>
            <div ref={menuRef}>
                <HamburgerSlider
                    buttonColor="transparent"
                    barColor="#fff"
                    buttonWidth={32}
                    className="focus:outline-none"
                    {...{ isActive, toggleButton }}
                />
                <Menu open={isActive} close={toggleButton} />
            </div>
            <Overlay open={isActive} />
        </div>
    )
}

export default MenuButton
