import {useState} from "react";

function PlayerCard({name,game,level}){
    const [likes, setLikes] = useState(0);
function increaseLikes(){
    setLikes(prev => prev +1);
    }
    return(
        <div>
            <h2>{name}</h2>
            <p>Game: {game}</p>
            <p>Level: {level}</p>
            <p>Likes: {likes}</p>
            <button onClick = {increaseLikes}>+</button>
        </div>
    )
}

export default PlayerCard;