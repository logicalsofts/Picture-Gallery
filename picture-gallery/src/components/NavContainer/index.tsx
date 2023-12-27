import React, { FC } from "react";
import Button from "../Button";
import Title from "../Title";
import { NavContainer } from "./styled";

interface PopularsListProps {
  populars: string[];
  onSearch: (popular: string) => void;
}

const PopularsList: FC<PopularsListProps> = (props) => {
  return (
    <React.Fragment>
      <NavContainer>
      <Title> Popular </Title>
      {props.populars &&
        props.populars.map((popular: string) => {
          return (
            <Button key={popular} onClick={() => props.onSearch(popular)}>
              {popular}
            </Button>
          );
        })}
        </NavContainer>
    </React.Fragment>
  );
};

export default PopularsList;
