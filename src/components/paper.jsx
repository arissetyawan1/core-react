import { React } from "react";
import PropTypes from "prop-types";

const Paper = ({ children, height }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.propType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Paper;
