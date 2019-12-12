import React, {useEffect} from 'react';
import {StudentCoursesComponent} from "./components/student-courses/StudentCoursesComponent";
import './App.css';
import bundle from "./interfaces/messages";

const App: React.FC = () => {
  useEffect(() => {
    document.title = bundle.messages.TITLE;
  });
  return (
    <StudentCoursesComponent/>
  );
};

export default App;
