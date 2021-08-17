
const useBlogInfo = () => {
    const getDaysPast = (datetime) => {
        const pastDatetime = new Date(datetime)
        const currentDatetime = new Date()

        const numOfDays = Math.round((currentDatetime - pastDatetime) / (1000 * 60 * 60 * 24))

        return numOfDays
    }

    const getDateText = (createdAt) => {
        const numOfDays = getDaysPast(createdAt)

        if (numOfDays < 7)
            return `${numOfDays} days ago`
        else {
            const numOfWeeks = numOfDays / 7

            if (numOfWeeks > 2)
                return 'Long time ago'
            else
                return `${numOfWeeks} weeks ago`
        }
    }

    const getFirstWord = (value) => {
        const wordsArray = value.split(' ')

        return wordsArray[0]
    }

    return {
        getDateText,
        getFirstWord
    }
}

export default useBlogInfo