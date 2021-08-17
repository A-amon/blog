import Text from './Text'
import Searchbar from '@components/Searchbar'
import Subscribe from '@components/Subscribe'
import Container from '@components/Container'

const Banner = ({ expandedSearchbar, onExpand, onSubscribe, searchValue, onSearch }) => {
    return (
        <section className='banner'>
            <Container>
                <Searchbar className='banner__searchbar'
                    onExpand={onExpand}
                    expanded={expandedSearchbar}
                    value={searchValue}
                    onChange={onSearch} />
                <Text heading='Digital Publishing Insights'
                    paragraph='Weekly insights on digital publishing, beauty and fashion, and other exciting stuffs in your mailbox' />
                <Subscribe className='banner__subscribe' />
            </Container>
        </section>
    )
}

export default Banner