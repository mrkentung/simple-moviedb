const CardMovie = ({
  imgUrl,
  title,
  year,
  handleClickImage,
  handleClickTitle,
}) => (
  <div className="relative" data-testid="card">
    <img
      src={imgUrl}
      className="mb-4 rounded-sm cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      alt={title}
      onClick={handleClickImage}
    />
    <p
      className="text-xl font-semibold cursor-pointer"
      onClick={handleClickTitle}
    >
      {title}
    </p>
    <p className="font-normal">{year}</p>
  </div>
)

export default CardMovie
