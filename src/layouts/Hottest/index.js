import PropTypes from 'prop-types'
import Blog from '@components/Blog'
import Container from '@components/Container'

const Hottest = ({ blog }) => {
    return (
        <section className="hottest">
            <Container>
                {
                    blog && <Blog hottest={true}
                        id={blog.id}
                        image={blog.linkToHeaderImage}
                        title={blog.title}
                        content={blog.content}
                        createdAt={blog.createdAtDateTimeOffset}
                        mainAuthor={blog.mainAuthor}
                        secondaryAuthor={blog.secondaryAuthor}
                        otherAuthors={blog.otherAuthors} />
                }
            </Container>
        </section>
    )
}

Hottest.propTypes = {
    blog: PropTypes.object
}

export default Hottest