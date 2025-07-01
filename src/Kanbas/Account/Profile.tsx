import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom";
import * as db from "../Database";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      navigate("/Kanbas/Account/Signin");
    } else {
      setProfile(currentUser);
    }
  }, [currentUser, navigate]);

  const updateProfile = () => {
    if (!profile) return;

    const userIndex = db.users.findIndex(
      (u: any) => u.id === currentUser.id
    );

    if (userIndex !== -1) {
      db.users[userIndex] = profile;
      dispatch(setCurrentUser(profile));
      alert("Profile updated successfully");
    } else {
      alert("User not found");
    }
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            value={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            value={profile.password}
            id="wd-password"
            type="password"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            value={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            value={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            value={profile.dob}
            id="wd-dob"
            type="date"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, dob: e.target.value })
            }
          />
          <input
            value={profile.email}
            id="wd-email"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />
          <select
            value={profile.role}
            onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })
            }
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
            id="wd-save-btn"
          >
            Save Changes
          </button>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
