import {useState} from "react";

const SearchBar = ({ setSearchResult }) => {
  const [input, setInput] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    setSearchResult(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} id="search">
      <label>
        <input placeholder="Search for Pokemon" onChange={(event) =>{
          setInput(event.target.value);
        }} value={input}/>
        <button>GO!</button>
      </label>
    </form>
  );
};

export default SearchBar;
