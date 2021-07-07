import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../services/Api";
import {useEffect} from "react";
import Post from "../post/Post";

export default function Posts(){
    const posts = useSelector(({posts}) => posts);

    const dispatch = useDispatch();

    const axiosPosts = () => {
        getPosts().then(value => {
            return dispatch({
                type: "POSTS",
                payload: value.data,
            })
        })
    }

    useEffect(() => {
        axiosPosts()
    }, [])

    return(
        <div>
            {
                posts.map(value => <Post key={value.id} item={value} />)
            }
        </div>
    )
}