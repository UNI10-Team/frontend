import React from "react";
import "./App.css";
import { StudentProfile } from "./components/profile/student-profile/StudentProfile";
import { TeacherProfile } from "./components/profile/teacher-profile/TeacherProfile";
import { StudentCourses } from "./components/student-courses/StudentCourses";
import Register from "./components/register/Register";
import NotFound from "./components/not-found/NotFound";
import { Login } from "./components/login/Login";
import { TeacherHomePage } from "./components/home/teacher-home/TeacherHomePage";
import { StudentHomePage } from "./components/home/student-home/StudentHomePage";
const App: React.FC = () => {
  return <Login />;
};
export default App;
