import Button from './Button'
import PropTypes from 'prop-types'
import { isEmpty } from '@functions/form'

const Searchbar = ({ className, expanded, onExpand, value, onChange }) => {

    /**
     * Handle searchbar change event
     * Pass empty string to onChange prop if empty
     * @param  {object} event
     */
    const handleChange = (event) => {
        const value = event.target.value

        if (isEmpty(value))
            onChange('')
        else
            onChange(value)
    }

    return (
        <div className={`searchbar ${expanded ? 'expanded' : ''} ${className}`}>
            <input placeholder='Enter your search here' className='searchbar-input' type="text" value={value} onChange={handleChange} />
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