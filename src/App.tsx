import React from 'react';
import {AttachmentDrop} from "./components/attachment-drop/attachmentDrop";
import {StudentCoursesComponent} from "./components/student-courses/StudentCoursesComponent";
import {Login} from "./components/login/Login";
import Register from "./components/register/Register";
import './App.css';
import {StudentProfile} from "./components/profile/student-profile/StudentProfile";
import {TeacherProfile} from "./components/profile/teacher-profile/TeacherProfile";
import {HomePage} from "./components/home/HomePage";
const App: React.FC = () => {
  return (
    <HomePage/>
  );
};

export default App;
