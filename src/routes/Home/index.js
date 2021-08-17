import { useState, useEffect } from 'react'
import Banner from '@layouts/Banner'
import Blogs from '@containers/Blogs'

const Home = () => {
    const [expandedSearchbar, setExpandedSearchbar] = useState(false)

    useEffect(() => {
        document.body.addEventListener('click', closeSearchbar)
    }, [])

    const closeSearchbar = event => {
        const clickedTarget = event.target

        if (!clickedTarget.className.includes('searchbar'))
            setExpandedSearchbar(false)
    }

    const blogs = [
        {
            title: 'Building an Inclusive Future: 2020 Diversity at Lambda School',
            linkToHeaderImage: 'https://www.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula scelerisque arcu, eu porttitor nunc accumsan at. Praesent placerat luctus eros id varius. Etiam euismod libero sit amet mauris venenatis commodo. Vestibulum id commodo arcu. Nunc ac lacus sed metus interdum consequat. Etiam non justo mi. Duis ac fringilla lacus. Aenean ultrices eu ipsum ac dignissim. In vitae ex velit. Curabitur at urna venenatis, tempor ipsum id, tincidunt lectus. Aliquam placerat eu magna vitae convallis. Nunc sodales sagittis augue, sit amet varius dui.',
            createdAtDateTimeOffset: '2021-08-03T06:35:34.21+00:00',
            mainAuthor: 'Mary Poppins',
            secondaryAuthor: null,
            otherAuthors: []
        }
    ]

    return (
        <>
            <Banner expandedSearchbar={expandedSearchbar}
                onExpand={event => setExpandedSearchbar(true)} />
            <Blogs blogs={blogs} />
        </>
    )
}

export default Home