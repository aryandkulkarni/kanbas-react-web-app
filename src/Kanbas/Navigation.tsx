import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FaUser, FaBook, FaCalendarAlt, FaInbox, FaCog, FaTachometerAlt } from "react-icons/fa";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: "128px", position: "fixed", bottom: "0", top: "0", backgroundColor: "black", zIndex: 2 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        style={{ display: "block", color: "white", textAlign: "center", padding: "10px 0" }}
      >
        <img src="images/NU_CMYK_Notched-N_motto_RW.png" alt="Northeastern" style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
      </a>

      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaUser style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Account</span>
      </NavLink>

      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        end
        style={{ display: "flex", color: "red", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaTachometerAlt style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Dashboard</span>
      </NavLink>

      <NavLink
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        style={{ display: "flex", color: "red", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaBook style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Courses</span>
      </NavLink>

      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        style={{ display: "flex", color: "red", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaCalendarAlt style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Calendar</span>
      </NavLink>

      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        style={{ display: "flex", color: "red", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaInbox style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Inbox</span>
      </NavLink>

      <NavLink
        to="/Labs"
        id="wd-labs-link"
        className={({ isActive }) => (isActive ? "kanbas-nav-link active-tab" : "kanbas-nav-link")}
        style={{ display: "flex", color: "red", flexDirection: "column", alignItems: "center", padding: "10px 0" }}
      >
        <FaCog style={{ fontSize: "24px" }} />
        <span className="nav-text" style={{ textAlign: "center" }}>Labs</span>
      </NavLink>
    </div>
  );
}
