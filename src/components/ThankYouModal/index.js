import PropTypes from 'prop-types'
import SuccessImg from '@assets/images/success.jpg'

const ThankYouModal = ({ show, onClose }) => {
    return (
        <div className={`thanks__modal ${show ? 'show' : ''}`}>
            <div className="thanks__dialog">
                <div className="thanks__image">
                    <img className='thanks__image-img' src={SuccessImg} alt="" aria-hidden="true" />
                </div>
                <div className="thanks__body">
                    <h2>It's a success!</h2>
                    <p className='thanks__body-message'>
                        You are now subscribed to our blog updates.
                        No more late news.
                    </p>
                    <button className="thanks__body-close" onClick={onClose}>
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