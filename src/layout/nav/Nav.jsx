import "./Nav.scss"
import Container from '../../utils/Utils'
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
// import { UserOutlined } from "@ant-design/icons"

const MenuData = [
  {
    title: "Home",
    route_link: "/"
  },
  {
    title: "Services",
    icon: "keyboard_arrow_down",
    route_link: 'services',
    menu_items: [
      { item_name: "Angioplasty Services", link: "https://example.com/primary-care" },
      { item_name: "Cardiology Services", link: "https://example.com/specialist-consultations" },
      { item_name: "Dental Services", link: "https://example.com/emergency-care" },
      { item_name: "Endocrinology Services", link: "https://example.com/surgical-procedures" },
      { item_name: "Eye Care Services", link: "https://example.com/diagnostic-imaging" },
      { item_name: "Neurology Services", link: "https://example.com/laboratory-tests" },
      { item_name: "Physical therapy", link: "https://example.com/physical-therapy" },
      { item_name: "RMI Services", link: "https://example.com/maternity-care" },
    ]
  },
 
  {
    title: "Contact Us",
    route_link: 'contact-us'
  },
  {
    title: "About Us",
    route_link: 'about-us'
  },
  {
    title: "FAQ",
    route_link: 'faq'
  },
]


const Nav = () => {


  const isRegistered = JSON.parse(localStorage.getItem('user'))
  console.log(isRegistered);

  const { pathname } = useLocation()



  // State Hooks
  const [openSearch, setOpenSearch] = useState(false)
  const [itemLists, setItemLists] = useState("")
  const [openResponsiveMenu, setOpenResponsiveSubMenu] = useState(false)
  const [openSubitems, setOpenSubitems] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const UpdateScrollPosition = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', UpdateScrollPosition)
    return () => {
      window.removeEventListener('scroll', UpdateScrollPosition)
    }
  }, [])

  if (pathname.includes("patient")) return null

  return pathname.includes("/auth") ? null : (
    <nav className={scrollY > 40 ? 'nav-fixed' : ''} >
      <Container>
        <div className="nav-wrapper">
          <Link className="nav-logo">
            <h1>AzharInc</h1>
          </Link>

          <ul className="nav-menu">
            {
              MenuData.map((menu_item, index) =>
                <li onMouseEnter={() => setItemLists(menu_item?.menu_items)} className="menu-item" key={index}>
                  <NavLink to={menu_item.route_link} className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} >{menu_item.title}</NavLink>
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

      <div className="nav__search-form">
        <input type="search" placeholder="Search..." />
        <span className="material-symbols-outlined">search</span>
      </div>

         

         


          <div className="authorization-action">
             <Link to={'/appointment'} className="appointment-link">APPOINTMENT + </Link>
          </div>

          <Link to={'/auth/login'} className="responsive-auth">
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
              <Link onClick={() => setOpenSubitems(!openSubitems)} className="item-link">
                {item.title}
                <span className="material-symbols-outlined"> {item.icon}</span>
              </Link>
              <div className="item-subitem">
                {
                  item?.menu_items?.map((subitem, index) =>
                    <Link key={index} className="subitem-link">{subitem.item_name}</Link>
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
