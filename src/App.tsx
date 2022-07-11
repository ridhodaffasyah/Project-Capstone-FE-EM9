import HomePage from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseList from './pages/CourseList';
import Course from './pages/Course';

const PrivateRoute = ({ isLogin }: { isLogin: boolean }) => {
  return isLogin ? <Outlet /> : <Navigate to="/home" />;
};

const PublicRoute = ({ isLogin }: { isLogin: boolean }) => {
  return !isLogin ? <Outlet /> : <Navigate to="/course-list" />;
};

function App({ isLogin }: { isLogin: boolean }) {
  console.log(isLogin);
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute isLogin={isLogin} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute isLogin={isLogin} />}>
          <Route path="course-list" element={<CourseList />} />
          <Route path="course/:title" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state: { auth: { isLogin: boolean } }) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(App);
