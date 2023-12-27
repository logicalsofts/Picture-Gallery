import { FC, useRef } from "react";
import Button from "../Button";
import { InputContainer, Input } from './styled'


interface SearchProps {
  handleSearch: Function;
}

const Search: FC<SearchProps> = (props) => {
  const searchInputRef = useRef<HTMLInputElement>(null) ;

  const handleInputChange = (): void => {
    props.handleSearch(searchInputRef.current?.value);
  };

  return (
    <InputContainer>
      <Input
        ref={searchInputRef}
        placeholder="Search Images"
      />
      <Button onClick={handleInputChange}>Search</Button>
    </InputContainer>
  );
};

export default Search;
