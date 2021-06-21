import styled from "styled-components"

const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 121px;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    transition: opacity 200ms;
    @media screen and (min-width: 768px) {
        top: 65px;
    }
`
const Overlay = ({ open }) => {
    return <StyledOverlay open={open}></StyledOverlay>
}

export default Overlay
