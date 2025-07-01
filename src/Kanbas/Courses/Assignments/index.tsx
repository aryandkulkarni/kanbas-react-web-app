import React from "react";
import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "250px" }}>
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h5 id="wd-assignments-title" className="mb-3">
        ASSIGNMENTS 40% of Total
      </h5>
      <ul id="wd-assignment-list" className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start border-start border-success mb-2">
          <div>
            <a className="wd-assignment-link text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br />
            <small>Multiple Modules | Not available until May 6 at 12:00am</small>
            <br />
            <small>Due May 13 at 11:59pm | 100 pts</small>
          </div>
          <FaCheckCircle className="text-success" size={20} />
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start border-start border-success mb-2">
          <div>
            <a className="wd-assignment-link text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/124">
              A2 - CSS + BOOTSTRAP
            </a>
            <br />
            <small>Single Module | Available until June 1 at 12:00am</small>
            <br />
            <small>Due June 8 at 11:59pm | 100 pts</small>
          </div>
          <FaCheckCircle className="text-success" size={20} />
        </li>
      </ul>
    </div>
  );
}
