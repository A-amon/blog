import { useState, useRef } from 'react'

const useSubscribe = (onSubscribe) => {
    const [email, setEmail] = useState('')
    const emailError = useRef(null)

    const validateForm = event => {
        if (isEmpty(email)) {
            event.preventDefault()
            setEmailError('This field cannot be empty')
        }
        else if (!isEmailValid(email)) {
            event.preventDefault()
            setEmailError('Please enter a valid email')
        }

        if (onSubscribe)
            onSubscribe({ email })
    }

    const setEmailError = message => {
        emailError.current.textContent = message
    }

    const isEmailValid = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    const isEmpty = (value) => {
        return value.replace(' ', '').length === 0
    }

    return {
        email,
        setEmail,
        validateForm,
        emailError
    }
}

export default useSubscribe