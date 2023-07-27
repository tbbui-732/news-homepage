import './stylesheet/Navigation.css';
import logo from './assets/images/logo.svg'

const Navigation = () => {
  return (
    <div className="Navigation">
      <img className="Logo" src={logo} alt="logo" />
      <div className="NavigationBar">
        <a href="#" className="NavLink">Home</a>
        <a href="#" className="NavLink">New</a>
        <a href="#" className="NavLink">Popular</a>
        <a href="#" className="NavLink">Trending</a>
        <a href="#" className="NavLink">Categories</a>
      </div>
    </div>
  );
};

export default Navigation;
