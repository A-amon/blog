
const API_URL = 'https://softwareq-merdeka-api.azure-api.net/blog/v1/'
const API_KEY = 'softwareq-apim-subscription-key=2235d2057ad84ac18ba9473ea26cac3b'

/**
 * Fetch all blogs
 * @returns {object} fetch promise
 */
const getAllBlogs = () => {
    const ALL_API = `${API_URL}ListAll?${API_KEY}`

    return fetch(ALL_API).then(res => res.json())
}

/**
 * Fetch blog by id
 * @returns {object} fetch promise
 */
const getBlogById = (id) => {
    const BLOG_API = `${API_URL}ById?id=${id}&${API_KEY}`

    return fetch(BLOG_API).then(res => res.json())
}

module.exports = {
    getBlogById,
    getAllBlogs
}