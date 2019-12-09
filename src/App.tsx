import React from 'react';
import {AttachmentDrop} from "./components/attachment-drop/attachmentDrop";
import {StudentCoursesComponent} from "./components/student-courses/StudentCoursesComponent";
import {Login} from "./components/login/Login";
import Register from "./components/register/Register";
import './App.css';
const App: React.FC = () => {
  return (
    <StudentCoursesComponent/>
  );
};

export default App;
