import "./Header.scss";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="header__background">
      <div className="header__logo">
        <img
          src={InStockLogo2x}
          alt="InStock-Logo-2x"
          className="InStock-Logo-2x"
        />
        <img src={InStockLogo} alt="InStock-Logo" className="InStock-Logo" />
      </div>
      <div className="header__button-section">
        <div className="header__button-container">
          <Link to={`/`}>
            <button className="header__button">
              <span className="test">Warehouses</span>
            </button>
          </Link>
        </div>
        <div className="header__button-container">
          <button className="header__button">
            <span>Inventory</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
