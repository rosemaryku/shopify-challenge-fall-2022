import "./Header.scss";
import shopifyLogo from "../../assets/shopify-logo.png";

const Header = () => {
  return (
    <header>
      <img src={shopifyLogo} alt="Shopify Logo" />
      <h1>Geography Trivia</h1>
    </header>
  );
};

export default Header;
