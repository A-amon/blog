import { useState, useEffect } from 'react'
import { getAllBlogs } from '@functions/blogs'

const useHome = () => {
    const [expandedSearchbar, setExpandedSearchbar] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [hottest, setHottest] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getBlogs()
    }, [])

    /**
     * Fetch all blogs
     */
    const getBlogs = () => {
        getAllBlogs()
            .then(data => {
                setHottest(data[0]) // set first blog item as Hottest
                setBlogs(data.slice(1)) //  set remaining blogs (excluding Hottest)
                setFilteredBlogs(data.slice(1)) // used in display
            })
    }

    /**
     * Close searchbar
     * @param  {object} event
     */
    const closeSearchbar = (event) => {
        const clickedTarget = event.target

        if (!clickedTarget.className.includes('searchbar'))
            setExpandedSearchbar(false)
    }

    /**
     * Update search value
     * Filter blogs by search value
     * @param  {string} value
     */
    const handleSearch = (value) => {
        setSearchValue(value)

        const filtered = blogs.filter(blog =>
            getBlogInfo(blog).toLowerCase().includes(value.toLowerCase())
        )

        setFilteredBlogs(filtered)
    }

    /**
     * Get blog information in string 
     * Concatenates title, mainAuthor, secondaryAuthor
     * @param  {object} blog
     * @returns {string}
     */
    const getBlogInfo = (blog) => {
        const { title, mainAuthor, secondaryAuthor } = blog

        let info = title

        info += `${mainAuthor ? mainAuthor : 'Anonymous'}`
        info += `${secondaryAuthor ? secondaryAuthor : ''}`

        return info
    }

    const subscribeHandler = (email) => {
        setShowModal(true)
    }

    document.body.addEventListener('click', closeSearchbar)

    return {
        expandedSearchbar,
        setExpandedSearchbar,
        searchValue,
        handleSearch,
        hottest,
        filteredBlogs,
        showModal,
        setShowModal,
        subscribeHandler
    }
}

export default useHome