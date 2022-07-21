import { MdSearch } from "react-icons/md"

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch 
        className="search-icon"
      />
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(event) => 
          handleSearchNote(event.target.value)
        }
      />
    </div>
  )
}

export default SearchBar;
