import PropTypes from 'prop-types'
import Blog from '@components/Blog'

const BlogsList = ({ blogs }) => {
    return (
        <ul className="blogs__list">
            {
                blogs.map(blog =>
                    <Blog key={blog.id}
                        id={blog.id}
                        image={blog.linkToHeaderImage}
                        title={blog.title}
                        content={blog.content}
                        createdAt={blog.createdAtDateTimeOffset}
                        mainAuthor={blog.mainAuthor}
                        secondaryAuthor={blog.secondaryAuthor}
                        otherAuthors={blog.otherAuthors} />
                )
            }
        </ul>
    )
}

BlogsList.propTypes = {
    blogs: PropTypes.array
}

export default BlogsList