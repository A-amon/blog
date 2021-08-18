import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import SuccessImg from '@assets/images/success.jpg'

const ThankYouModal = ({ show, onClose }) => {
    const buttonRef = useRef(null)

    useEffect(() => {
        if (show) {
            const closeButton = buttonRef.current
            closeButton.focus()
            closeButton.addEventListener('keydown', handleKey)

            document.addEventListener('keydown', handleKey)
        }
    }, [show])

    /**
     * Determine key pressed and trigger actions
     * @param  {object} event
     */
    const handleKey = (event) => {
        const keyCode = event.keyCode
        switch (keyCode) {
            case 9: //  tab
                event.preventDefault()  //  return focus to close button
                break
            case 27:    //  esc
                closeModal()
                break
            default:
                break
        }
    }

    /**
     * Handle esc pressed
     * Close modal
     */
    const closeModal = () => {
        document.removeEventListener('keydown', handleKey)
        onClose()
    }

    return (
        <div className={`thanks__modal ${show ? 'show' : ''}`}>
            <div className="thanks__dialog" role='dialog' aria-labelledby='thanks__title' aria-describedby='thanks__desc'>
                <div className="thanks__image">
                    <img className='thanks__image-img' src={SuccessImg} alt="" aria-hidden="true" />
                </div>
                <div className="thanks__body">
                    <h2 id='thanks__title'>It's a success!</h2>
                    <p id='thanks__desc' className='thanks__body-message'>
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