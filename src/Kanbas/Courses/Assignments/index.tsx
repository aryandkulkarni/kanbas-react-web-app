import React from "react";
import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { assignments } from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  submissionType: string;
  assignmentGroup: string;
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const filteredAssignments: Assignment[] = assignments.filter(
    (assignment) => assignment.course === cid
  );

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
        ASSIGNMENTS
      </h5>
      <ul id="wd-assignment-list" className="list-group">
        {filteredAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="list-group-item d-flex justify-content-between align-items-start border-start border-success mb-2"
          >
            <div>
              <Link
                className="wd-assignment-link text-decoration-none"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <br />
              <small>Course: {assignment.course}</small>
              <br />
              <small>Available from: {new Date(assignment.availableDate).toLocaleDateString()} | Due: {new Date(assignment.dueDate).toLocaleDateString()} | {assignment.points} pts</small>
              <br />
              <small>Submission Type: {assignment.submissionType}</small>
              <br />
              <small>Assignment Group: {assignment.assignmentGroup}</small>
            </div>
            <FaCheckCircle className="text-success" size={20} />
          </li>
        ))}
      </ul>
    </div>
  );
}
