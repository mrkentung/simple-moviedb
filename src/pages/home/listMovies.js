import Section from '../../components/Section'
import CardMovie from '../../components/Card-movie'
import Search from '../../components/Search'

const ListMovies = ({
  list,
  handleClickTitle,
  handleClickImage,
  searchSuggestions,
  searchOnChange,
}) => {
  return (
    <Section title="List Movies">
      <Search
        searchSuggestions={searchSuggestions}
        searchOnChange={searchOnChange}
        handleClickTitle={(val) => handleClickTitle(val)}
      />
      <div className="grid grid-cols-2 gap-3">
        {list && list.isLoading ? (
          <p>Loading</p>
        ) : (
          list.data.map((item, idx) => (
            <CardMovie
              key={idx}
              imgUrl={item.Poster}
              title={item.Title}
              year={item.Year}
              handleClickImage={() => handleClickImage(idx)}
              handleClickTitle={() => handleClickTitle(item.imdbID)}
            />
          ))
        )}
      </div>
    </Section>
  )
}

export default ListMovies
