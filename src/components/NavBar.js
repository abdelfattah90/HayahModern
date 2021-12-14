import { NavLink } from 'react-router-dom'
import './css_components/navbar.css'
const Nav = () => {
  return (
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-nav">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          حياه مودرن
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list-bold">
            <li className="nav-item">
              <NavLink className="nav-link" to="/living-room">
                ليفينج روم
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/antiques">
                انتيكات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/woodwork">
                خشبيات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/frames">
                براويز
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hours">
                ساعات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/mirrors">
                مرايات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/flower">
                ورود وبوكيهات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/curtains">
                ستائر
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
