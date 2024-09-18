const DropdownItem = ({active, activeItem, onItem}) => {

  const items = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]
  
  return ( 
      <div className={active?"dropdown__btns":"dropdown__btns hidden"}>
      {items.map(item => 
      <button 
          key={item} 
          className={activeItem === item ? "dropdown__btn active": "dropdown__btn" } 
          onClick={(evt) => onItem(evt.target.textContent) }
          style = {activeItem === item ? {color: "blue"} : {}}
      >
      {item}
      </button>)}
      </div>
      )
  
}

export default DropdownItem