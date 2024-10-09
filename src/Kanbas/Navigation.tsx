import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaUser, FaHome, FaBook, FaCalendarAlt, FaInbox, FaFlask } from "react-icons/fa";

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
      <Link to="/Kanbas/Account" id="wd-account-link" className="kanbas-nav-link" style={{ color: "white" }}>
        <FaUser style={{ color: "red" }} />
        <span className="nav-text">Account</span>
      </Link>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className="kanbas-nav-link">
      <FaHome style={{ color: "red" }} />
      <span className="nav-text">  Dashboard</span>
      </Link>
      <Link to="/Kanbas/Dashboard" id="wd-course-link" className="kanbas-nav-link">
      <FaBook style={{ color: "red" }} />
      <span className="nav-text">  Courses</span>
      </Link>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className="kanbas-nav-link">
      <FaCalendarAlt style={{ color: "red" }} />
      <span className="nav-text">  Calendar</span>
      </Link>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link" className="kanbas-nav-link">
      <FaInbox style={{ color: "red" }} />
      <span className="nav-text">  Inbox</span>
      </Link>
      <Link to="/Labs" id="wd-labs-link" className="kanbas-nav-link">
      <FaFlask style={{ color: "red" }} />
      <span className="nav-text">  Labs</span>
      </Link>
    </div>
  );
}
