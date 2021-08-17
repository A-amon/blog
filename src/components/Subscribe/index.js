import PropTypes from 'prop-types'
import useSubscribe from './useSubscribe'

const Subscribe = ({ className, onSubscribe }) => {

    const {
        email,
        setEmail,
        validateForm,
        emailError
    } = useSubscribe(onSubscribe)

    return (
        <form className={`subscribe ${className}`} onSubmit={validateForm} noValidate={true}>
            <div className="subscribe__group">
                <input value={email}
                    onChange={event => setEmail(event.target.value)}
                    className='subscribe-input'
                    type='email'
                    placeholder='Your email' required />
                <strong ref={emailError} className="subscribe-error">
                </strong>
            </div>
            <button className="subscribe-button">
                Subscribe
            </button>
        </form>
    )
}

Subscribe.propTypes = {
    className: PropTypes.string,
    onSubscribe: PropTypes.func
}

export default Subscribe