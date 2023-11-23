import React from "react";
import "./styles.scss";
import { FabListProps } from "../../../types";
import classNames from "classnames";
import FabListItem from "../../atoms/FabListItem/FabListItem";

const FabList = ({ isOpen, componentsArr }: FabListProps) => {
  return (
    <div
      className={classNames(
        "fab-list",
        {
          "fab-list--open": isOpen,
        },
        {
          "fab-list--empty": componentsArr.length <= 0,
        }
      )}
    >
      {componentsArr.length > 0 ? (
        componentsArr.map((item) => {
          const { id, component_name, component_category, url } = item;
          return (
            <FabListItem
              key={id}
              componentName={component_name}
              componentCategory={component_category}
              url={`https://bio-storybook.vercel.app/?path=/docs/${url}`}
            />
          );
        })
      ) : (
        <text>No Components</text>
      )}
    </div>
  );
};

export default FabList;
