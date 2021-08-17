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
            getBlog()
            getBlogs()
        }
    }, [])

    /**
     * Fetch blog by id
     */
    const getBlog = () => {
        getBlogById(id).then(data => {
            setBlog(data)
        })
    }

    /** 
     * Fetch all blogs
     */
    const getBlogs = () => {
        getAllBlogs().then(data => {
            setBlogs(data.filter(dataItem => dataItem.id !== parseInt(id)))
        })
    }

    return (
        <>
            {
                blog && <Header title={blog.title}
                    image={blog.linkToHeaderImage}
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