import PropTypes from 'prop-types'
import Blog from '@components/Blog'

const Blogs = ({ blogs }) => {
    return (
        <section className="blogs">
            <ul className="blogs__cards">
                {
                    blogs.map((blog, ind) =>
                        <Blog key={ind} image={blog.linkToHeaderImage}
                            title={blog.title}
                            content={blog.content}
                            createdAt={blog.createdAtDateTimeOffset}
                            mainAuthor={blog.mainAuthor}
                            secondaryAuthor={blog.secondaryAuthor}
                            otherAuthors={blog.otherAuthors} />
                    )
                }
            </ul>
        </section>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.array
}

export default Blogs