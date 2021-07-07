import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import {useEffect} from "react";


export default function Users(){
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const axiosUsers = () => {
        getUsers().then(value => {
            return dispatch({
                type: "USERS",
                payload: value.data,
            })
        })
    }

    useEffect(() => {
        axiosUsers()
    }, [])

    return(
        <div>
            {
                users.map(value => <User key={value.id} item={value} />)
            }
        </div>
    )
}