import PlayerCard from "./PlayerCard";

function App(){
  return(
    <div>
      <PlayerCard name = "Elias"
        game = "Prince of Persia"
        level = "85">
      </PlayerCard>
      <PlayerCard name = "George"
        game = "Assasins Creed"
        level = "49">
      </PlayerCard>
      <PlayerCard name = "Maria"
        game = "Minecraft"
        level = "35">
      </PlayerCard>
      <PlayerCard name = "John"
        game = "Prince of Persia"
        level = "30">

      </PlayerCard>
    </div>
  )
}
export default App;