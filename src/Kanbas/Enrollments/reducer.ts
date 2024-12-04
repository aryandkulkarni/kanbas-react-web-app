import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: db.enrollments,
  reducers: {
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const exists = state.find(
        (enrollment) =>
          enrollment.user === userId && enrollment.course === courseId
      );
      if (!exists) {
        const newEnrollment = {
          user: userId,
          course: courseId,
          _id: new Date().getTime().toString(),
        };
        state.push(newEnrollment);
      }
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const index = state.findIndex(
        (enrollment) =>
          enrollment.user === userId && enrollment.course === courseId
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    setEnrollments: (state, action) => {
      return action.payload;
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
