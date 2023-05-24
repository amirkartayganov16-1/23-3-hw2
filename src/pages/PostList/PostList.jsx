import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(resp => setPosts(resp.data))
    }, [])

    return (
        <div><h4>PostList</h4>
            {posts.map( p => 
                <li key={p.id}>
                    <Link to={`/posts/${p.id}`}>{p.title}</Link>
                </li>
            )}
        </div>
    )
}
export default PostList
