import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
  const toggle = () => {
    $('.toggle-bar').on('click', function (event: any) {
      $('this').toggleClass('open');
      $('.navigation-bar').slideToggle('200');
    });
  };

  return (
    <nav>
      <div className="logo">
        <Link to="#">
          <img src="/assets/images/logo.png" alt="Logo Teachio" />
        </Link>
      </div>
      <div className="toggle-bar" id="toggle-bar" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navigation-bar">
        <ul className="ul">
          <div className="nav-left">
            <li>
              <Link to="/home" className="nav-content active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/course" className="nav-content">
                Course
              </Link>
            </li>
            <li>
              <Link to="/company" className="nav-content">
                Company
              </Link>
            </li>
          </div>
          <div className="nav-right">
            <li className="login-btn">
              <Link to="/">Masuk</Link>
            </li>
            <li className="signup-btn">
              <Link to="/signup">Daftar</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
