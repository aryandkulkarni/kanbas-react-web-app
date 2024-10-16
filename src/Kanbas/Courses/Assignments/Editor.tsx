import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h1>Course 1234</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
                </div>
                <div className="mb-3">
                    <label htmlFor="wd-textarea" className="form-label">Description</label>
                    <textarea id="wd-textarea" className="form-control" rows={4}>
                        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
                    </textarea>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input id="wd-points" className="form-control" type="number" placeholder="100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                        <input id="wd-due-date" className="form-control" type="date" />
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <button type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    );
}
