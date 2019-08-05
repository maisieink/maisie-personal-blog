import React from "react";

import styles from "./code-block-header.module.css";

const CodeBlockHeader = ({ title }) => (
  <h6 className={styles.header}>
    <span className={styles.headerDot} />
    <span className={styles.headerDot} />
    <span className={styles.headerDot} />
    {title}
  </h6>
);

export default CodeBlockHeader;
