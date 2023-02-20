import "./App.css";
import { searchData } from "./SearchBar/mockData";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      sample
      <SearchBar width="200" height="40" data={searchData} />
    </div>
  );
}

export default App;
