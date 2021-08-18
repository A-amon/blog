import { useState, useRef } from 'react'
import { isEmpty, isEmailValid } from '@functions/form'

const useSubscribe = (onSubscribe) => {
    const [email, setEmail] = useState('')
    const emailError = useRef(null)

    /**
     * Validate submitted data - Email
     * Display error if empty or invalid
     * @param  {object} event
     */
    const validateForm = (event) => {
        event.preventDefault()

        if (isEmpty(email)) {
            setEmailError('This field cannot be empty')
        }
        else if (!isEmailValid(email)) {
            setEmailError('Please enter a valid email')
        }

        if (onSubscribe) {
            setEmail('')
            onSubscribe({ email })
        }
    }

    /**
     * Display error for email input
     * @param  {string} message
     */
    const setEmailError = (message) => {
        emailError.current.textContent = message
    }

    return {
        email,
        setEmail,
        validateForm,
        emailError
    }
}

export default useSubscribe