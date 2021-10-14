import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "darkblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
