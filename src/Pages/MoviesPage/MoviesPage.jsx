import { useState } from "react";

const MoviesPage = () => {
    const [search, setSearch] = useState('');

    const handleInput = ({target}) => {
        setSearch(target.value);
        console.log(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <main>
      <form>
        <input onChange={handleInput} type="text" value={search} required/>
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default MoviesPage;
