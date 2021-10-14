import { React } from "react";
import PropTypes from "prop-types";
import styles from "./Paper.module.css";
const Paper = ({ children, height }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
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
