import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './initial pages/Login.jsx';
import ForgotPassword from "./initial pages/ForgotPassword.jsx";
import HomeStudent from "./student pages/HomeStudent.jsx";
import ProfileStudent from "./student pages/ProfileStudent.jsx";
import ProgressStudent from "./student pages/ProgressStudent.jsx";
import LessonStudent from "./student pages/LessonStudent.jsx";
import HomeTeacher from "./teacher pages/HomeTeacher.jsx";
import Profileteacher from "./teacher pages/ProfileTeacher.jsx";
import ProfileTeacher from "./teacher pages/ProfileTeacher.jsx";
import MyGroups from "./teacher pages/GroupsTeacher.jsx";
import LessonsOverview from "./teacher pages/LessonsOverview.jsx";
import GroupsTeacher from "./teacher pages/GroupsTeacher.jsx";
import GroupDetails from "./teacher pages/GroupDetails.jsx";
import StudentDetails from "./teacher pages/StudentDetails.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* Перенаправление по умолчанию на логин */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Страница логина */}

                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home-student" element={<HomeStudent />} />
                <Route path="/profile-student" element={<ProfileStudent />} />
                <Route path="/progress-student" element={<ProgressStudent />} />
                <Route path="/lesson/:id" element={<LessonStudent />} /> {/* Динамический маршрут */}


                <Route path="/home-teacher" element={<HomeTeacher />} />
                <Route path="/profile-teacher" element={<ProfileTeacher />} />
                <Route path="/my-groups" element={<GroupsTeacher />} />
                <Route path="/group-details/:groupId" element={<GroupDetails />} />
                <Route path="/lessons-overview" element={<LessonsOverview />} />
                <Route path="/profile-teacher" element={<ProfileTeacher />} />
                <Route path="/student/:studentId" element={<StudentDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
