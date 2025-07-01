import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { enrollCourse, unenrollCourse } from "./Enrollments/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isStudent = currentUser && currentUser.role === "STUDENT";

  const enrolledCourseIds = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  const displayedCourses = isStudent
    ? showAllCourses
      ? courses
      : courses.filter((courseItem) =>
          enrolledCourseIds.includes(courseItem._id)
        )
    : courses;

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      {isStudent && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-toggle-enrollments-btn"
        >
          {showAllCourses ? "Enrollments" : "Enrollments"}
        </button>
      )}

      {!isStudent && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
              id="wd-add-new-course-click"
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((courseItem) => (
            <div
              key={courseItem._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <img
                  src={courseItem.image || "/images/reactjs.jpg"}
                  width="100%"
                  height={160}
                  alt="Course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {courseItem.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-description card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {courseItem.description}
                  </p>

                  {(!isStudent || enrolledCourseIds.includes(courseItem._id)) && (
                    <Link
                      to={`/Kanbas/Courses/${courseItem._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                  )}

                  {isStudent && !enrolledCourseIds.includes(courseItem._id) && (
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        dispatch(
                          enrollCourse({
                            userId: currentUser._id,
                            courseId: courseItem._id,
                          })
                        )
                      }
                    >
                      Enroll
                    </button>
                  )}

                  {isStudent && enrolledCourseIds.includes(courseItem._id) && (
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch(
                          unenrollCourse({
                            userId: currentUser._id,
                            courseId: courseItem._id,
                          })
                        )
                      }
                    >
                      Unenroll
                    </button>
                  )}

                  {!isStudent && (
                    <>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(courseItem);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(courseItem._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
