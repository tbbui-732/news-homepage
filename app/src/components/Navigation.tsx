import './stylesheet/Navigation.css';
import logo from './assets/images/logo.svg'

const Navigation = () => {
  return (
    <div className="Navigation">
      <img className="Logo" src={logo} alt="logo" />
      <div className="NavigationBar">
        <div className="NavLink">Home</div>
        <div className="NavLink">New</div>
        <div className="NavLink">Popular</div>
        <div className="NavLink">Trending</div>
        <div className="NavLink">Categories</div>
      </div>
    </div>
  );
};

export default Navigation;
