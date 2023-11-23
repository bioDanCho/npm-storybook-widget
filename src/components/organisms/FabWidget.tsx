import React, { useState } from "react";
import styles from "./FabWidget.module.scss";
import { FabWidgetProps } from "../../types";
import classNames from "classnames";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import FabList from "../molecules/FabList/FabList";

const FabWidget = ({ componentsArr }: FabWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='wrapper'>
      <div
        className={classNames(styles["widget"], {
          [styles["widget--open"]]: isOpen,
        })}
      >
        {/* content */}
        <FabList isOpen={isOpen} componentsArr={componentsArr} />

        {/* button */}
        <div
          className={classNames(styles["widget__btn"], {
            [styles["widget__btn--open"]]: isOpen,
          })}
          onClick={handleBtnClick}
        >
          {isOpen ? (
            <BsArrowsAngleContract className={styles["widget__btn__icon"]} />
          ) : (
            <BsArrowsAngleExpand className={styles["widget__btn__icon"]} />
          )}
        </div>
      </div>

      {/* backdrop */}
      {isOpen && (
        <div
          className={styles["backdrop"]}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default FabWidget;
