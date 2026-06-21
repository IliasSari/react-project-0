import {useState} from "react";

function PlayerCard({name, game, initialLevel}){
    const [likes, setLikes,] = useState(0);
    const [level, setLevel] = useState(initialLevel || 1);
function increaseLikes(){
    setLikes(prev => prev +1);
    }
function decreaseLikes(){
    if (likes >0){
    setLikes(prev => prev -1);
    }
}
function increaseLevel(){
    setLevel(prev => prev +1);
    }
function decreaseLevel(){
    if (level>1){
    setLevel(prev => prev -1);
    }
}
    return(
        <div>
            <h2>{name}</h2>
            <p>Game: {game}</p>
            <p>Level: {level}</p>
            <p>Likes: {likes}</p>
            <button onClick = {increaseLikes}>+ Increase Likes</button>
            <button onClick = {decreaseLikes}>- Decrease Likes</button>
            <br></br><button onClick = {increaseLevel}>+ Increase Levels</button>
            <button onClick = {decreaseLevel}>- Decrease Levels</button>
        </div>
    )
}

export default PlayerCard;