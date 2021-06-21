import styled from "styled-components"
import {
    SearchIcon,
    CameraIcon,
} from "@heroicons/react/outline"

const StyledSearchbar = styled.div`
width: 100%;
    input {
        background: #f2f2f2;
    }
    #searchIcon {
        left: 32px;
        top: 50%;
        transform: translateY(-50%);
    }
    #cameraIcon {
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
    }
`
const Searchbar = () => {
    return (
        <StyledSearchbar className="px-4 relative w-full">
            <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full rounded-full py-2 px-12 placeholder-gray-500 focus:outline-none"
            />
            <div id="searchIcon" className="absolute text-gray-900">
                <SearchIcon className="h-5 w-5 cursor-pointer" />
            </div>
            <div id="cameraIcon" className="absolute text-gray-900">
                <CameraIcon className="h-6 w-6 cursor-pointer" />
            </div>
        </StyledSearchbar>
    )
}

export default Searchbar
