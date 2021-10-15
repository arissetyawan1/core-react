/** @jsxImportSource @emotion/react */
import { React } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
// import styles from "./Paper.module.css";

import * as styles from "./Paper.styles";
const Paper = ({ children, height }) => {
  const theme = useTheme();
  return (
    // Using css module
    // <div className={styles.paper}>
    //   <div className={styles.frame}>{children}</div>
    // </div>

    // Using theme and css in js module
    <div css={styles.paper(theme)}>
      <div css={styles.frame(theme)}>{children}</div>
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
