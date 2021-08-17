import Button from './Button'
import PropTypes from 'prop-types'

const Searchbar = ({ className, expanded, onExpand, value, onChange }) => {
    return (
        <div className={`searchbar ${expanded ? 'expanded' : ''} ${className}`}>
            <input placeholder='Enter your search here' className='searchbar-input' type="text" value={value} onChange={onChange} />
            <Button clickable={!expanded} onClick={onExpand} />
        </div>
    )
}

Searchbar.propTypes = {
    className: PropTypes.string,
    expanded: PropTypes.bool,
    onExpand: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Searchbar