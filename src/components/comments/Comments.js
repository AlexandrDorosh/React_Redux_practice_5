import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../services/Api";
import {useEffect} from "react";
import Comment from "../comment/Comment";

export default function Comments(){
    const comments = useSelector(({comments}) => comments);

    const dispatch = useDispatch();

    const axiosComments = () => {
        getComments().then(value => {
            return dispatch({
                type: "COMMENTS",
                payload: value.data,
            })
        })
    }

    useEffect(() => {
        axiosComments()
    }, [])

    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value} />)
            }
        </div>
    )
}