import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Author = ({ name, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {

    useEffect(() => {
        getDaysPast(createdAt)
    }, [])

    const getDaysPast = (datetime) => {
        const pastDatetime = new Date(datetime)
        const currentDatetime = new Date()

        const numOfDays = Math.round((currentDatetime - pastDatetime) / (1000 * 60 * 60 * 24))

        return `${numOfDays} days ago`
    }

    return (
        <div className="blog__author">
            <div className="author__details">
                <strong className='author__details-name'>
                    {name}
                </strong>
                <date className='author__details-date'>
                    {getDaysPast(createdAt)}
                </date>
            </div>
        </div>
    )
}

Author.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string
}

export default Author