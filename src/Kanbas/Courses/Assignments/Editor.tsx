import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNewAssignment = aid === "new";

  const [assignment, setAssignment] = useState<any>({
    _id: "",
    title: "",
    course: cid,
    description: "",
    points: 0,
    dueDate: "",
    availableDate: "",
    submissionType: "online",
    assignmentGroup: "",
  });

  useEffect(() => {
    if (!isNewAssignment) {
      const existingAssignment = assignments.find(
        (a: any) => a._id === aid && a.course === cid
      );
      if (existingAssignment) {
        setAssignment(existingAssignment);
      } else {
        alert("Assignment not found");
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      }
    }
  }, [aid, cid, assignments, isNewAssignment, navigate]);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setAssignment((prevState: any) => ({
      ...prevState,
      [id.replace("wd-", "")]: value,
    }));
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h1>{isNewAssignment ? "New Assignment" : assignment.title}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="wd-title" className="form-label">
            Assignment Title
          </label>
          <input
            id="wd-title"
            className="form-control"
            value={assignment.title}
            onChange={handleChange}
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
            value={assignment.description}
            onChange={handleChange}
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
              value={assignment.points}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-dueDate" className="form-label">
              Due Date
            </label>
            <input
              id="wd-dueDate"
              className="form-control"
              type="date"
              value={assignment.dueDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-availableDate" className="form-label">
            Available From
          </label>
          <input
            id="wd-availableDate"
            className="form-control"
            type="date"
            value={assignment.availableDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-submissionType" className="form-label">
            Submission Type
          </label>
          <select
            id="wd-submissionType"
            className="form-select"
            value={assignment.submissionType}
            onChange={handleChange}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-assignmentGroup" className="form-label">
            Assignment Group
          </label>
          <input
            id="wd-assignmentGroup"
            className="form-control"
            type="text"
            value={assignment.assignmentGroup}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-success"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
