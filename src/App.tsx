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

const PrivateRoute = ({ isLogin }: { isLogin: boolean }) => {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = ({ isLogin }: { isLogin: boolean }) => {
  return !isLogin ? <Outlet /> : <Navigate to="/home" />;
};

function App({ isLogin }: { isLogin: boolean }) {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isLogin={isLogin} />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route element={<PublicRoute isLogin={isLogin} />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state: { auth: { isLogin: boolean } }) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(App);
