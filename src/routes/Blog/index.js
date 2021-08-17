import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Container from '@components/Container'
import Blogs from '@layouts/Blogs'
import { getBlogById, getAllBlogs } from '@functions/blogs'

const Blog = () => {
    const [blog, setBlog] = useState(null)
    const [blogs, setBlogs] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getBlog(id)
            getBlogs()
        }
    }, [])

    /**
     * Fetch blog by id
     * @param  {number} id
     */
    const getBlog = (id) => {
        getBlogById(id).then(data => {
            setBlog(data)
        })
    }

    /** 
     * Fetch all blogs
     */
    const getBlogs = () => {
        getAllBlogs().then(data => {
            setBlogs(data)
        })
    }

    return (
        <>
            {
                blog && <Header image={blog.linkToHeaderImage}
                    createdAt={blog.createdAtDateTimeOffset}
                    mainAuthor={blog.mainAuthor}
                    secondaryAuthor={blog.secondaryAuthor}
                    otherAuthors={blog.otherAuthors} />
            }
            <section className="r-blog__content">
                <Container>
                    <p className="r-blog__content-text">
                        {
                            blog && blog.content
                        }
                    </p>
                </Container>
            </section>
            <Blogs blogs={blogs} />
        </>
    )
}

export default Blog