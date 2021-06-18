const Search = ({
  searchSuggestions,
  searchOnChange,
  handleClickTitle,
}) => {
  const renderSuggestions = (list) => {
    return (
      <div className="bg-white shadow w-full z-10 absolute top-12 min-h-full">
        {list.data.map((item, idx) => {
          if (item) {
            return (
              <div
                key={idx}
                className="hover:bg-gray-300 p-4 cursor-pointer"
              >
                <p onClick={() => handleClickTitle(item.imdbID)}>
                  {item.Title}
                </p>
              </div>
            )
          } else {
            return (
              <div
                key={idx}
                className="hover:bg-gray-300 p-4 cursor-pointer"
              >
                <p>Data not found</p>
              </div>
            )
          }
        })}
      </div>
    )
  }

  return (
    <div className="w-full mb-4 relative">
      <input
        type="text"
        placeholder="Search title"
        className="w-full p-2 border rounded border-gray-100"
        onChange={searchOnChange}
      />
      {searchSuggestions.data.length > 0 &&
      !searchSuggestions.isLoading
        ? renderSuggestions(searchSuggestions)
        : null}
    </div>
  )
}

export default Search
