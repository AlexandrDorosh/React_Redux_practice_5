import './Post.css';
export default function Post({item}){
    return(
        <div className={"post"}>
            <h3>Post: {item.id}</h3>
            <div><strong>Title: </strong>{item.title}</div>
            <div><strong>Body: </strong>{item.body}</div>
        </div>
    )
}