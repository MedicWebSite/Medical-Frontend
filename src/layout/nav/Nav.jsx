import "./Nav.scss"
import Container from '../../utils/Utils'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const MenuData = [
  {
    title: "Home",
  },
  {
    title: "Services",
    menu_items: [
      { item_name: "Primary care", link: "https://example.com/primary-care" },
      { item_name: "Specialist consultations", link: "https://example.com/specialist-consultations" },
      { item_name: "Emergency care", link: "https://example.com/emergency-care" },
      { item_name: "Surgical procedures", link: "https://example.com/surgical-procedures" },
      { item_name: "Diagnostic imaging", link: "https://example.com/diagnostic-imaging" },
      { item_name: "Laboratory tests", link: "https://example.com/laboratory-tests" },
      { item_name: "Physical therapy", link: "https://example.com/physical-therapy" },
      { item_name: "Mental health services", link: "https://example.com/mental-health-services" },
      { item_name: "Maternity care", link: "https://example.com/maternity-care" },
      { item_name: "Pediatric care", link: "https://example.com/pediatric-care" },
      { item_name: "Geriatric care", link: "https://example.com/geriatric-care" }
    ]
  },
  {
    title: "Pages",
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
  const [openMenu, setOpenMenu] = useState(true)
  const [screenWidth, setScreenWidth] = useState(0)
  console.log(screenWidth);


  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
      window.addEventListener('resize', handleScreenWidth)
      return () => {
        window.removeEventListener('resize', handleScreenWidth)
      }

  }, [])


  useEffect(() => {
    if(window.innerWidth < 931){
      setOpenMenu(false)
    } 
  }, [window.innerWidth])


  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link className="nav-logo">
            <h1>Azhar INC</h1>
          </Link>
          <ul style={openMenu ? {display: 'flex'} : {display: 'none'}}  className="nav-menu">
            {
              MenuData.map((menu_item, index) =>
                <li onMouseEnter={() => setItemLists(menu_item?.menu_items)} className="menu-item" key={index}>
                  <Link  className="item-link" >{menu_item.title}</Link>
                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                  <div className="menu__dropdown-list">
                    {
                      itemLists && itemLists?.map((item, index) =>
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
            <form style={openSearch ? { transform: 'translateY(30%)' } : { transform: 'translateY(-200%)' }} className="search-form">
              <input className="search-input" type="text" placeholder="Search" />
              <button className="search-btn">
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>
          </div>

          <div className="authorization-action">
            <Link className="auth-link">Get Started</Link>
          </div>
          <span onClick={() => setOpenMenu(!openMenu)} style={screenWidth < 930 ? {display: 'block'} : {display: 'none'}}  className="material-symbols-outlined hamburger-btn">menu</span>

        </div>
      </Container>
    </nav>
  )
}

export default Nav
