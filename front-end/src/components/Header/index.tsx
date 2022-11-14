import "./styles.css";
import header_img from "../../assets/img/header-img.svg";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={header_img} alt="DSMeta" />
        <h1>Sales Management Dashboard</h1>
      </div>
    </header>
  );
};
