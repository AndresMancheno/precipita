import React, { FC } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import searchIcon from '../../../public/search.svg';

type InputTextType = {
  value: string;
  placeholder?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: FC<InputTextType> = ({ value, placeholder, handleOnChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputText}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <Image
        className={styles.inputIcon}
        src={searchIcon}
        width={20}
        height={20}
        alt="Follow us on Twitter"
      />
    </div>
  );
};

export default InputText;
