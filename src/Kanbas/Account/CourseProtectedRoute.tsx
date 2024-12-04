import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function CourseProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams<{ cid: string }>();

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  if (currentUser.role !== "STUDENT") {
    return children;
  }

  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}
