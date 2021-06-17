import ContentLoader from 'react-content-loader'

const ContentSekeleton = (props) => (
    <ContentLoader
    className="w-full"
    viewBox="0 0 300 178"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="178" height="3" />
    <rect x="44" y="323" rx="3" ry="3" width="100" height="6" />
    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
  </ContentLoader>
)

export default ContentSekeleton