import React, { useState } from "react";
import styles from "./tab.module.css";

const Tab = ({ children }) => {
  const [activeTab, setactiveTab] = useState(children[0].props.label);
  const handleclick = (e, newActiveTab) => {
    e.preventDefault();
    setactiveTab(newActiveTab);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>
        {children.map((tab) => {
            const label = tab.props.label;
          return (
            <li
              key={tab.props.label}
              className={label === activeTab ? styles.current : ""}
            >
             <a href="#"  onClick={(e)=> handleclick(e,label)}>{tab.props.label}</a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
          if(one.props.label == activeTab)
        return (
          <div key={one.props.label} className={styles.content}>
            {one.props.children}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;

