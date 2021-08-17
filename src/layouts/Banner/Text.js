
const Text = ({ heading, paragraph }) => {
    return (
        <div className='banner__text'>
            <h1 className='banner__text-heading'>
                {heading}
            </h1>
            <p className='banner__text-paragraph'>
                {paragraph}
            </p>
        </div>
    )
}

export default Text