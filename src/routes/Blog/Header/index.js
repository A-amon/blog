import PropTypes from 'prop-types'
import BlogInfo from '@components/Blog/Info'
import Container from '@components/Container'

const Header = ({ title, image, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {
    return (
        <section className="r-blog__header">
            <Container>
                <img className="r-blog__header-img" src={image} alt="" aria-hidden='true' />
                <h1>{title}</h1>
                <BlogInfo full={true}
                    createdAt={createdAt}
                    mainAuthor={mainAuthor}
                    secondaryAuthor={secondaryAuthor}
                    otherAuthors={otherAuthors} />
            </Container>
        </section>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    mainAuthor: PropTypes.string,
    secondaryAuthor: PropTypes.string,
    otherAuthors: PropTypes.array,
    createdAt: PropTypes.string
}

export default Header