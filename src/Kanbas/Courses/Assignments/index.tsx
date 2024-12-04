import React from "react";
import { FaSearch, FaPlus, FaCheckCircle, FaTrash } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer);
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove the assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
          <button
            className="btn btn-danger"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Assignments/new`)
            }
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h5 id="wd-assignments-title" className="mb-3">
        ASSIGNMENTS
      </h5>
      <ul id="wd-assignment-list" className="list-group">
        {filteredAssignments.map((assignment: any) => (
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
              <small>
                Available from:{" "}
                {new Date(assignment.availableDate).toLocaleDateString()} | Due:{" "}
                {new Date(assignment.dueDate).toLocaleDateString()} |{" "}
                {assignment.points} pts
              </small>
              <br />
              <small>Submission Type: {assignment.submissionType}</small>
              <br />
              <small>Assignment Group: {assignment.assignmentGroup}</small>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" size={20} />
              <FaTrash
                className="text-danger"
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(assignment._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
