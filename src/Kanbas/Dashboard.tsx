import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const courses = [
    {
      id: 1234,
      title: "CS1234 React JS",
      code: "CS1234",
      term: "Fall",
      year: "2024",
      section: "001",
      image: "/images/reactjs.jpg",
    },
    {
      id: 1235,
      title: "CS1235 GoLang",
      code: "CS1235",
      term: "Fall",
      year: "2024",
      section: "002",
      image: "/images/golang.jpg",
    },
    {
      id: 1236,
      title: "CS1236 C#",
      code: "CS1236",
      term: "Fall",
      year: "2024",
      section: "003",
      image: "/images/csharp.jpg",
    },
    {
      id: 1237,
      title: "CS1237 Rust",
      code: "CS1237",
      term: "Fall",
      year: "2024",
      section: "004",
      image: "/images/rust.jpg",
    },
    {
      id: 1238,
      title: "CS1238 Haskell",
      code: "CS1238",
      term: "Fall",
      year: "2024",
      section: "005",
      image: "/images/haskell.jpg",
    },
    {
      id: 1239,
      title: "CS1239 OCaml",
      code: "CS1239",
      term: "Fall",
      year: "2024",
      section: "006",
      image: "/images/ocaml.jpg",
    },
    {
      id: 1230,
      title: "CS1230 Racket",
      code: "CS1230",
      term: "Fall",
      year: "2024",
      section: "007",
      image: "/images/racket.jpg",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <div id="wd-dashboard-courses">
        {courses.map((course) => (
          <div className="wd-dashboard-course" key={course.id}>
            <Link
              className="wd-dashboard-course-link"
              to={`/Kanbas/Courses/${course.id}/Home`}
            >
              <img src={course.image} alt={course.title} />
              <div>
                <h5>{course.title}</h5>
                <p className="wd-dashboard-course-title">
                  {course.term} {course.year} - Section {course.section}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
