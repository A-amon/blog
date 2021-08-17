import PropTypes from 'prop-types'
import Container from '@components/Container'
import BlogsList from '@containers/BlogsList'

const Blogs = ({ blogs }) => {
    return (
        <section className="blogs">
            <Container>
                <BlogsList blogs={blogs} />
            </Container>
        </section>
    )
}

Blogs.propTypes = {
    blogs: PropTypes.array
}

export default Blogs