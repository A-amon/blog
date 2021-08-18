import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import SuccessImg from '@assets/images/success.jpg'

const ThankYouModal = ({ show, onClose }) => {
    const buttonRef = useRef(null)

    useEffect(() => {
        if (show)
            buttonRef.current.focus()
    }, [show])

    return (
        <div className={`thanks__modal ${show ? 'show' : ''}`}>
            <div className="thanks__dialog" role='dialog' aria-label='Successful subscription'>
                <div className="thanks__image">
                    <img className='thanks__image-img' src={SuccessImg} alt="" aria-hidden="true" />
                </div>
                <div className="thanks__body">
                    <h2>It's a success!</h2>
                    <p className='thanks__body-message'>
                        You are now subscribed to our blog updates.
                        No more late news.
                    </p>
                    <button ref={buttonRef} className="thanks__body-close" onClick={onClose}>
                        Got it
                    </button>
                </div>
            </div>
        </div>
    )
}

ThankYouModal.propTypes = {
    show: PropTypes.bool
}

export default ThankYouModal