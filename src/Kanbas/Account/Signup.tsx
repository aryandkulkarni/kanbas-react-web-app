import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";

export default function Signup() {
  const [userData, setUserData] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "USER",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = () => {
    const existingUser = db.users.find(
      (u: any) => u.username === userData.username
    );
    if (existingUser) {
      alert("Username already exists");
      return;
    }

    const newUser = {
      ...userData,
      id: new Date().getTime().toString(),
    };

    db.users.push(newUser);
    dispatch(setCurrentUser(newUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        id="wd-username"
        placeholder="Username"
        className="form-control mb-2"
        onChange={(e) =>
          setUserData({ ...userData, username: e.target.value })
        }
      />
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
        onChange={(e) =>
          setUserData({ ...userData, password: e.target.value })
        }
      />
      <input
        id="wd-email"
        placeholder="Email"
        type="email"
        className="form-control mb-2"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className="form-control mb-2"
        onChange={(e) =>
          setUserData({ ...userData, firstName: e.target.value })
        }
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className="form-control mb-2"
        onChange={(e) =>
          setUserData({ ...userData, lastName: e.target.value })
        }
      />
      <input
        id="wd-dob"
        placeholder="Date of Birth"
        type="date"
        className="form-control mb-2"
        onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
      />
      <select
        id="wd-role"
        className="form-control mb-2"
        onChange={(e) => setUserData({ ...userData, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        id="wd-signup-btn"
        onClick={signup}
        className="btn btn-primary w-100"
      >
        Sign up
      </button>
      <br />
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
