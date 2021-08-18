import Banner from '@layouts/Banner'
import Blogs from '@layouts/Blogs'
import Hottest from '@layouts/Hottest'
import useHome from './useHome'
import ThankYouModal from '@components/ThankYouModal'

const Home = () => {
    const {
        expandedSearchbar,
        setExpandedSearchbar,
        searchValue,
        handleSearch,
        hottest,
        filteredBlogs,
        showModal,
        setShowModal,
        subscribeHandler
    } = useHome()

    return (
        <>
            <Banner expandedSearchbar={expandedSearchbar}
                onExpand={event => setExpandedSearchbar(true)}
                searchValue={searchValue}
                onSearch={handleSearch}
                onSubscribe={subscribeHandler} />
            <Hottest blog={hottest} />
            <Blogs blogs={filteredBlogs} />
            <ThankYouModal show={showModal} onClose={event => setShowModal(false)} />
        </>
    )
}

export default Home