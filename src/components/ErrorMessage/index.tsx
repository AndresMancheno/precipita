import React, { FC } from 'react';
import styles from './style.module.css';

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
