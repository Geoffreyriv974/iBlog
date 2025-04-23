import "./SearchBar.css";
function Search({ onChange }: { onChange: (value: string) => void }) {
    return (
        <input
            type="text"
            id="search"
            placeholder="rechercher une destination"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {

    return (
        <div className="search-bar">
            <h1>iBlog</h1>
            <div className="div-search">
                <Search onChange={onSearch} />
            </div>
        </div>
    );
}

export default SearchBar;
