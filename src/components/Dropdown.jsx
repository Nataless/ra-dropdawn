import { useState } from "react"
import DropdownItem from "./DropdownItem"
import DropdownList from "./DropdownList"


const Dropdown = () => {
    const [dropActive, setActive] = useState(false)
    const [activeItem, setItem] = useState("Change Password")
    
    return (
        <div className="dropdown">
        <DropdownList active={dropActive} onActive = {setActive}/>
        <DropdownItem active={dropActive} activeItem={activeItem} onItem={setItem}/>
        </div>
    )
}

export default Dropdown