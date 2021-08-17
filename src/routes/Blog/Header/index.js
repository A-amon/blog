import PropTypes from 'prop-types'
import BlogInfo from '@components/Blog/Info'
import Container from '@components/Container'

const Header = ({ image, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {
    return (
        <section className="r-blog__header">
            <Container>
                <img className="r-blog__header-img" src={image} alt="" aria-hidden='true' />
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
    image: PropTypes.string,
    mainAuthor: PropTypes.string,
    secondaryAuthor: PropTypes.string,
    otherAuthors: PropTypes.array,
    createdAt: PropTypes.string
}

export default Header