import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };

  useEffect(() => { fetchProfile(); }, []);

  const signout = async () => {
    await client.signout();
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
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
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
