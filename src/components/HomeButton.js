import "./HomeButton.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

function HomeButton({ name, to }) {
  return (
    <Link className="home-button" to={to}>
      {name}
    </Link>
  );
}

export default HomeButton;
