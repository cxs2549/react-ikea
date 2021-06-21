import { useRoutes } from "react-router-dom"
import Footer from "./components/layout/footer/Footer"
import Navbar from "./components/layout/nav/Navbar"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import Rooms from "./pages/Rooms"
import Deals from "./pages/Deals"

const routes = [
    {path: "/", element: <Homepage />},
    {path: "/products", element: <Products />},
    {path: "/rooms", element: <Rooms />},
    {path: "/deals", element: <Deals />},
]

const App = () => {
    const element = useRoutes(routes)
    return (
        <>
            <Navbar />
            <div>
                {element}
            </div>
            <Footer />
        </>
    )
}

export default App
