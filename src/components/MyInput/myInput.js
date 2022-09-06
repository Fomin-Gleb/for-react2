import React from "react";
import styles from './styles.module.css'


const MyInput= (props) => {
  return (
   <input {...props}  className={styles.myInput} onChange={props.onChange}/>
  );
};

export default MyInput;