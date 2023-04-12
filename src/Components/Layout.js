import { Outlet,Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/student-1'>Student</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
      <Outlet />
      {/* The <Outlet> renders the current route selected.*/}
      {/* path='/student-1' from Parent.js */}
      {/* To add the link in the menu path='/student-1'=to={"/student-1"} */}
    </>
  )
};

export default Layout;