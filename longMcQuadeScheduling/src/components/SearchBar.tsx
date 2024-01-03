
import React, { ChangeEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSearchQuery(target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Type in a user..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
