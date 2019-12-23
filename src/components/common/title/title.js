import React from "react";
import PropTypes from "prop-types";

import styles from "./title.module.css";

export const Title = props => {
  const { content } = props;
  return <h1 className={styles.title}>{content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired
};
