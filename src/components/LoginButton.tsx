import React from "react";
import styles from "../styles/LoginButton.module.scss";

interface LoginButtonProps {
  label: string;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;
