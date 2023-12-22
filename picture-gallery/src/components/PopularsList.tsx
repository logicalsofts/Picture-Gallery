import React, { FC } from "react";
import Button from "./Button";

interface PopularsListProps {
  populars: string[];
  onSearch: (popular: string) => void;
}

const PopularsList: FC<PopularsListProps> = (props) => {
  return (
    <React.Fragment>
      {props.populars &&
        props.populars.map((popular: string) => {
          return (
            <Button key={popular} onClick={() => props.onSearch(popular)}>
              {popular}
            </Button>
          );
        })}
    </React.Fragment>
  );
};

export default PopularsList;
