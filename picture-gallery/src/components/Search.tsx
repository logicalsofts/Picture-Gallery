import React, { FC, useState, ChangeEvent } from 'react';
import Button from './Button';
import Input from './Input';
import InputContainer from './InputContainer';

interface SearchProps {
    handleSearch: Function
}

const Search: FC<SearchProps> = (props) => {
  const [search, setSearch] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <InputContainer>
      <Input value={search} onChange={handleInputChange} placeholder="Search Images" />
      <Button onClick={() => props.handleSearch(search)}>Search</Button>
    </InputContainer>
  );
};

export default Search;