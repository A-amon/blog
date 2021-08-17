import Banner from '@layouts/Banner'
import Blogs from '@layouts/Blogs'
import Hottest from '@layouts/Hottest'
import useHome from './useHome'

const Home = () => {
    const {
        expandedSearchbar,
        setExpandedSearchbar,
        searchValue,
        handleSearch,
        hottest,
        filteredBlogs
    } = useHome()

    return (
        <>
            <Banner expandedSearchbar={expandedSearchbar}
                onExpand={event => setExpandedSearchbar(true)}
                searchValue={searchValue}
                onSearch={handleSearch} />
            <Hottest blog={hottest} />
            <Blogs blogs={filteredBlogs} />
        </>
    )
}

export default Home