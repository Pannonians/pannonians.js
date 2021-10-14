import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickHandeler = () => {
    console.log("Bravisimo");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="darkblue" text="Add task" onClick={onClickHandeler} />
    </header>
  );
};

Header.defaultProps = {
  title: "ToDo Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
