import PropTypes from 'prop-types'

const Container = ({ className, children }) => {
    return (
        <div className={`container ${className ? className : ''}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
}

export default Container