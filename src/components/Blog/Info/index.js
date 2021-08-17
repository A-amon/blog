import PropTypes from 'prop-types'
import useBlogInfo from './useInfo'

const BlogInfo = ({ full, createdAt, mainAuthor, secondaryAuthor, otherAuthors }) => {
    const {
        getDateText,
        getFirstWord
    } = useBlogInfo()

    return (
        <div className={`c-blog__info ${full ? 'c-blog__info--full' : ''}`}>
            <strong className='c-blog__authors'>
                <span className="c-blog__authors-main">
                    {
                        mainAuthor
                            ? `${full
                                ? mainAuthor
                                : getFirstWord(mainAuthor)
                            }${secondaryAuthor
                                ? `, ${full
                                    ? secondaryAuthor
                                    : getFirstWord(secondaryAuthor)
                                }`
                                : ''}`
                            : 'Anonymous'
                    }
                </span>
                {
                    full
                        ? (
                            <ul className="c-blog__others">
                                {
                                    otherAuthors.map((other, ind) =>
                                        <li key={ind} className="c-blog__other">
                                            {other}{ind >= 0 && ind < otherAuthors.length - 1 ? ',' : null}
                                        </li>
                                    )
                                }
                            </ul>
                        )
                        : (
                            <span className="c-blog__authors-others">
                                {
                                    otherAuthors.length > 0
                                        ? `+ ${otherAuthors.length} others`
                                        : null
                                }
                            </span>
                        )
                }
            </strong>
            <time className='c-blog__info-date'>
                {
                    getDateText(createdAt)
                }
            </time>
        </div>
    )
}

BlogInfo.propTypes = {
    full: PropTypes.bool,
    mainAuthor: PropTypes.string,
    secondaryAuthor: PropTypes.string,
    otherAuthors: PropTypes.array,
    createdAt: PropTypes.string
}

export default BlogInfo