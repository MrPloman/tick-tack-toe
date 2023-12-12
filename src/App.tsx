import "./App.css";
import { BoardComponent } from "./components/board/board";
import { ScoreComponent } from "./components/score/score";
import { TurnSelectorComponent } from "./components/turn-selector/turn-selector";
import { useGameState } from "./hooks/useGameState";

function App() {
    const { boardState, turnState, counterGameState, playerMovement } = useGameState();
    return (
        <div id="container">
            <ScoreComponent counter={counterGameState}></ScoreComponent>
            <BoardComponent
                structure={boardState.structure}
                turn={turnState}
                playerMovement={playerMovement}
            ></BoardComponent>
            <TurnSelectorComponent turnState={turnState}></TurnSelectorComponent>
        </div>
    );
}

export default App;
