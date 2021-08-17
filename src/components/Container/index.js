import PropTypes from 'prop-types'

const Container = ({ className, children }) => {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
}

export default Container