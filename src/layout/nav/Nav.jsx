import "./Nav.scss"
import Container from '../../utils/Utils'
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"


const MenuData = [
  {
    title: "Home",
  },
  {
    title: "Services",
    icon: "keyboard_arrow_down",
    menu_items: [
      { item_name: "Primary care", link: "https://example.com/primary-care" },
      { item_name: "Specialist consultations", link: "https://example.com/specialist-consultations" },
      { item_name: "Emergency care", link: "https://example.com/emergency-care" },
      { item_name: "Surgical procedures", link: "https://example.com/surgical-procedures" },
      { item_name: "Diagnostic imaging", link: "https://example.com/diagnostic-imaging" },
      { item_name: "Laboratory tests", link: "https://example.com/laboratory-tests" },
      { item_name: "Physical therapy", link: "https://example.com/physical-therapy" },
      { item_name: "Maternity care", link: "https://example.com/maternity-care" },
    ]
  },
  {
    title: "Pages",
    icon: "keyboard_arrow_down",
    menu_items: [
      {
        item_name: "About Us",
        item_link: "about-us",
      },
      {
        item_name: "Our Process",
        item_link: "our-process",
      },
      {
        item_name: "Our Plans",
        item_link: "our_plans",
      },
      {
        item_name: "Working Ours",
        item_link: "working_ours",
      },
      {
        item_name: "Our Doctors",
        item_link: "our_doctors",
      }
    ]
  },
  {
    title: "Contact Us"
  }
]


const Nav = () => {

  // State Hooks
  const [openSearch, setOpenSearch] = useState(false)
  const [itemLists, setItemLists] = useState("")
  const [openResponsiveMenu, setOpenResponsiveSubMenu] = useState(false)
  const [openSubitems, setOpenSubitems] = useState(false)

  console.log(openResponsiveMenu);

  const {pathname} = useLocation()


  return pathname.includes("/auth") ? null : (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link className="nav-logo">
            <h1>Azhar INC</h1>
          </Link>
          <ul className="nav-menu">
            {
              MenuData.map((menu_item, index) =>
                <li onMouseEnter={() => setItemLists(menu_item?.menu_items)} className="menu-item" key={index}>
                  <Link className="item-link" >{menu_item.title}</Link>
                  <span className="material-symbols-outlined">{menu_item.icon}</span>
                  <div className="menu__dropdown-list">
                    {
                      menu_item.menu_items?.map((item, index) =>
                        <Link className="item-link" key={index}>{item.item_name}</Link>
                      )
                    }
                  </div>
                </li>
              )
            }
          </ul>

          <div className="nav-action">
            <span style={openSearch ? { display: 'none' } : { display: 'block' }} onClick={() => setOpenSearch(true)} className="material-symbols-outlined action-icon">search</span>
            <span style={openSearch ? { display: 'block' } : { display: 'none' }} onClick={() => setOpenSearch(false)} className="material-symbols-outlined action-icon">close</span>
            <form style={openSearch ? { transform: 'scale(1) translateY(30%)' } : { transform: 'scale(0) translateY(30%)', transition: '0s' }} className="search-form">
              <input className="search-input" type="text" placeholder="Search" />
              <button className="search-btn">
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>
          </div>

          <div className="authorization-action">
            <Link to={'/auth/login'} className="auth-link">Get Started</Link>
          </div>
          <Link className="responsive-auth">
          <span className="material-symbols-outlined">person</span>
            <strong>Sign in</strong>
          </Link>
          <span onClick={() => setOpenResponsiveSubMenu(!openResponsiveMenu)} className="material-symbols-outlined hamburger-btn">{openResponsiveMenu ? 'close' : 'menu'}</span>



         
        </div>
      </Container>
       {/* Responsive menu */}
       <ul style={openResponsiveMenu ? { display: 'flex' } : { display: 'none' }} className="responsive__menu-wrapper">
            {
              MenuData.map((item, index) =>
                <li key={index} className="menu-item">
                  <Link onClick={() => setOpenSubitems(!openSubitems)}  className="item-link">
                    {item.title}
                     <span className="material-symbols-outlined"> {item.icon}</span>
                     </Link>
                  <div  className="item-subitem">
                    {
                      item?.menu_items?.map((subitem, index) =>
                        <Link className="subitem-link">{subitem.item_name}</Link>
                      )
                    }
                  </div>
                </li>
              )
            }
            
          </ul>
    </nav>
  )
}

export default Nav
