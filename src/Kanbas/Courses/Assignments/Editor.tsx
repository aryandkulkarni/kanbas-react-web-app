import React from "react";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h1>Course 1234</h1>

            <label htmlFor="wd-name">Assignment Name </label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-textarea" cols={30} rows={10}>The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.</textarea>
            <br /><br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100} />
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option value="assignments">ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade">
                                <option value="percentage">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission">
                                <option value="online">Online</option>
                            </select>
                            <br /><br />
                            <label htmlFor="wd-online">Online Entry Options </label>
                            <div>
                                <input type="checkbox" id="text-entry" name="text-entry" />
                                <label htmlFor="text-entry">Text Entry</label>
                                <br />
                                <input type="checkbox" id="website-url" name="website-url" />
                                <label htmlFor="website-url">Website URL</label>
                                <br />
                                <input type="checkbox" id="media-recordings" name="media-recordings" />
                                <label htmlFor="media-recordings">Media Recordings</label>
                                <br />
                                <input type="checkbox" id="student-annotation" name="student-annotation" />
                                <label htmlFor="student-annotation">Student Annotation</label>
                                <br />
                                <input type="checkbox" id="file-uploads" name="file-uploads" />
                                <label htmlFor="file-uploads">File Uploads</label>
                            </div>
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign">Assign To</label>
                        </td>
                        <td>
                            <input id="wd-assign" value="Everyone" />
                        </td>
                    </tr>
                    <br /><br />

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due">Due</label>
                        </td>
                        <td>
                            <input type="date" id="wd-due" value="2024-05-13" />
                        </td>
                    </tr>

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>
                        <td>
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                            <label htmlFor="wd-available-until"> Until </label>
                            <input type="date" id="wd-available-until" value="2024-05-20" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />

            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
