import './Header.css';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className={'header'}>
            <Link className={'a'} to={'/users'}>USERS</Link>
            <Link className={'a'} to={'/posts'}>POSTS</Link>
            <Link className={'a'} to={'/comments'}>COMMENTS</Link>
        </div>
    )
}