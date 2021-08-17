import PropTypes from 'prop-types'
import Author from './Author'

const Blog = ({ image, title, content, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {
    return (
        <li className="blog">
            <div className="blog__image">
                <img aria-hidden='true' src={image} alt='' className="blog__image-img" />
            </div>
            <div className="blog__details">
                <h3 className='blog__details-title'>
                    {title}
                </h3>
                <Author createdAt={createdAt}
                    mainAuthor={mainAuthor}
                    secondaryAuthor={secondaryAuthor}
                    otherAuthors={otherAuthors} />
            </div>
        </li>
    )
}

Blog.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    mainAuthor: PropTypes.string,
    secondaryAuthor: PropTypes.string,
    otherAuthors: PropTypes.array
}

export default Blog