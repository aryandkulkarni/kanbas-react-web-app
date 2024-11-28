import React from "react";
import { useParams, Link } from "react-router-dom";
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
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignment: Assignment | undefined = assignments.find(
    (assignment) => assignment._id === aid && assignment.course === cid
  );

  if (!assignment) {
    return (
      <div id="wd-assignments-editor" className="container mt-4">
        <h1>Assignment Not Found</h1>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger mt-3">
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h1>{assignment.title}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="wd-title" className="form-label">
            Assignment Title
          </label>
          <input
            id="wd-title"
            className="form-control"
            defaultValue={assignment.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">
            Description
          </label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={4}
            defaultValue={assignment.description}
          ></textarea>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
            <input
              id="wd-points"
              className="form-control"
              type="number"
              defaultValue={assignment.points}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-due-date" className="form-label">
              Due Date
            </label>
            <input
              id="wd-due-date"
              className="form-control"
              type="date"
              defaultValue={assignment.dueDate}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-available-date" className="form-label">
            Available From
          </label>
          <input
            id="wd-available-date"
            className="form-control"
            type="date"
            defaultValue={assignment.availableDate}
          />
        </div>
        {}
        <h4 className="mt-4">Assign</h4>
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign To
          </label>
          <input
            id="wd-assign-to"
            className="form-control"
            type="text"
            placeholder="Enter name or email"
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-assign-due" className="form-label">
              Due
            </label>
            <input
              id="wd-assign-due"
              className="form-control"
              type="date"
              defaultValue={assignment.dueDate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-assign-until" className="form-label">
              Until
            </label>
            <input
              id="wd-assign-until"
              className="form-control"
              type="date"
              defaultValue={assignment.dueDate}
            />
          </div>
        </div>
        {}
        <div className="mb-3">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select id="wd-submission-type" className="form-select" defaultValue="online">
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-assignment-group" className="form-label">
            Assignment Group
          </label>
          <input
            id="wd-assignment-group"
            className="form-control"
            type="text"
            placeholder="Enter assignment group"
          />
        </div>
        {}
        <div className="d-flex justify-content-between mt-4">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-success">
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
