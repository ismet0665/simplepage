import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
        <h3>
          <span className="ismet">⚔ İsmeT ⚔ </span>
          <span className="ismet">FrontEndDeveloper</span>
          
        </h3>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
