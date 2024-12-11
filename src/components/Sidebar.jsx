import logo from "../assets/logo.png";
function Sidebar() {
  return (
    <div className="sidebar" >
      <div className="compact">
        <img className="logo" src={logo} alt="logo" />
        <a href="https://teamdiversity.web.app/">About</a>
        <i className="bi bi-brightness-high"></i>
      </div>
    </div>
  );
}

export default Sidebar;
