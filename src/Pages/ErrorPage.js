import { Link } from "react-router-dom";
import "../CSS/ErrorPage.css";

const ErrorPage = () => {
  return (
    <section className="errorpage">
      <h3>Oops! Page not found</h3>
      <Link to="/"className="button" >
        Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
