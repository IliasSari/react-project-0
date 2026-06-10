import PlayerCard from './PlayerCard';

function App(){
  return(
    <div>
      <PlayerCard Name = "Elias"
        Game = "Prince of Persia"
        Level = "85">
      </PlayerCard>
      <PlayerCard Name = "George"
        Game = "Assasins Creed"
        Level = "49">
      </PlayerCard>
      <PlayerCard Name = "Maria"
        Game = "Minecraft"
        Level = "35">
      </PlayerCard>
    </div>
  )
}
export default App;