import Header from '../components/Header'

const Layout = ({handleScroll, children}) => {
    return (
        <div className="bg-gray-50 mx-auto h-full box-border">
            <Header />
            <div className="pb-4 overscroll-x-none overflow-y-scroll" style={{ 'height': 'calc(100vh - 64px)' }} onScroll={handleScroll}>
                {children}
            </div>
        </div>
    )
}

export default Layout
