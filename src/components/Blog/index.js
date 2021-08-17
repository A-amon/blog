import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BlogInfo from './Info'
import { BlogRoute } from '@routes'

const Blog = ({ hottest, id, image, title, content, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {
    return (
        <li className={`c-blog ${hottest ? 'c-blog--hottest' : ''}`}>
            <div className="c-blog__image">
                <img aria-hidden='true' src={image} alt='' className="c-blog__image-img" />
            </div>
            <div className="c-blog__details">
                {
                    // Show hottest tag
                    hottest
                        ? <h2 className="c-blog__details-tag">
                            Hottest
                        </h2>
                        : null
                }
                <h3 className='c-blog__details-title'>
                    {title}
                </h3>
                <BlogInfo createdAt={createdAt}
                    mainAuthor={mainAuthor}
                    secondaryAuthor={secondaryAuthor}
                    otherAuthors={otherAuthors} />
                {
                    // Only show trimmed content if hottest
                    hottest
                        ? (
                            <p className='c-blog__details-content'>
                                {content}
                            </p>
                        )
                        : null
                }
            </div>
            <Link className='c-blog-link' to={BlogRoute.replace(':id', id)} aria-label='Read more' />
        </li>
    )
}

Blog.propTypes = {
    hottest: PropTypes.bool,
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    mainAuthor: PropTypes.string,
    secondaryAuthor: PropTypes.string,
    otherAuthors: PropTypes.array
}

export default Blog