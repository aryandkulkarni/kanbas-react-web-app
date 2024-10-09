import { Link } from "react-router-dom";
import "./Dashboard.css"
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                CS1234
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/golang.jpg" width={200} />
            <div>
              <h5>
                CS1235 GoLang
              </h5>
              <p className="wd-dashboard-course-title">
                CS1235
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1236/Home">
            <img src="/images/csharp.jpg" width={200} />
            <div>
              <h5>
                CS1236 C#
              </h5>
              <p className="wd-dashboard-course-title">
                CS1236
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1237/Home">
            <img src="/images/rust.jpg" width={200} />
            <div>
              <h5>
                CS1237 Rust
              </h5>
              <p className="wd-dashboard-course-title">
                CS1237
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1238/Home">
            <img src="/images/haskell.jpg" width={200} />
            <div>
              <h5>
                CS1238 Haskell
              </h5>
              <p className="wd-dashboard-course-title">
                CS1238
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1239/Home">
            <img src="/images/ocaml.jpg" width={200} />
            <div>
              <h5>
                CS1239 OCaml
              </h5>
              <p className="wd-dashboard-course-title">
                CS1239
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1230/Home">
            <img src="/images/racket.jpg" width={200} />
            <div>
              <h5>
                CS1230 Racket
              </h5>
              <p className="wd-dashboard-course-title">
                CS1230
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}








