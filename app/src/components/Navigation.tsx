import './stylesheet/Navigation.css';

const Navigation = () => {

  const logo = // TODO: insert image location

  return (
    <div className="Navigation">
      <div className="Logo">{logo}</div>
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
