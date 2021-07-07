import './Comment.css';
export default function Comment({item}){
    return(
        <div className={'comment'}>
            <h3>Comment: {item.id}</h3>
            <div><strong>Name:</strong> {item.name}</div>
            <div><strong>Email:</strong> {item.email}</div>
            <div><strong>Body:</strong> {item.body}</div>
        </div>
    )
}