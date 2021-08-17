import { HomeRoute } from '@routes'
import Container from '@components/Container'

const Header = () => {
    return (
        <header className='header'>
            <Container className='header__container'>
                <a className='header__container-logo' href={HomeRoute}>
                    Blog
                </a>
            </Container>
        </header>
    )
}

export default Header