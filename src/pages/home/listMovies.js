import Section from '../../components/Section'

const ListMovies = ({list, handleClickTitle, handleClickImage, searchSuggestions, searchOnChange, isLoadingSearch}) => {
    console.log(searchSuggestions.response)

    const renderSuggestions = (list) => {
        return (
            <div className="bg-white shadow w-full z-10 absolute top-12 min-h-full">
                {list.data.map((item, idx) => {
                        if (item) {
                            return (
                                <div key={idx} className="hover:bg-gray-300 p-4 cursor-pointer">
                                    <p onClick={() => handleClickTitle(item.imdbID)}>{item.Title}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div className="hover:bg-gray-300 p-4 cursor-pointer">
                                    <p>Data not found</p>
                                </div>
                            )
                        }
                    }
            
                )}
            </div>
        )
    }
    return (
        <Section title="List Movies">
            <div className="w-full mb-4 relative">
                <input type="text" placeholder="Search title" className="w-full p-2 border rounded border-gray-100" onChange={searchOnChange} />
                {searchSuggestions.data.length > 0 && !searchSuggestions.isLoading ? (
                    renderSuggestions(searchSuggestions)
                ) : null}
            </div>
            <div className="grid grid-cols-2 gap-3">
                {list && list.isLoading ? (
                    <p>Loading</p>
                ) : (
                    list.data.map((item, idx) => (
                        <div className="relative" key={idx}>
                            <img src={item.Poster} className="mb-4 rounded-sm cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" alt={item.Title} onClick={() => handleClickImage(idx)} />
                            <p className="text-xl font-semibold cursor-pointer" onClick={() => handleClickTitle(item.imdbID)} >{item.Title}</p>
                            <p className="font-normal">{item.Year}</p>
                        </div>
                    ))
                )}
            </div>
        </Section>
    )
}

export default ListMovies