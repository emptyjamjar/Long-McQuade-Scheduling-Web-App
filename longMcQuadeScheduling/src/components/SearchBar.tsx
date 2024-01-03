import React, { ChangeEvent, useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, value }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter Student Number"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
