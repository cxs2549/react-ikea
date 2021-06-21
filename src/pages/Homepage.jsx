import styled from 'styled-components'
import hero from '../assets/hero.png'

const HomepageWrapper = styled.div`
    #hero {
        background-image: url(${hero});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 470px;
        width: 100%;
    }
`
const Homepage = () => {
    return (
        <HomepageWrapper className="bg-red-400 h-screen">
            <div id="hero">

            </div>
        </HomepageWrapper>
    )
}

export default Homepage
