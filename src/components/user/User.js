import './User.css';
export default function User({item}){
    return(
        <div className={'user'}>
            <h3>{item.id}. {item.name} - {item.username}</h3>
        </div>
    )
}