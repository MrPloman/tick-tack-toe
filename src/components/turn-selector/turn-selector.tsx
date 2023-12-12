import { playerValues } from "../../types/player-values.type";
import "./turn-selector.scss";
interface TurnSelectorProps {
    turnState: playerValues;
}

export const TurnSelectorComponent: React.FC<TurnSelectorProps> = ({ turnState }) => {
    return (
        <div id="players">
            <div id="player1" className={"turn " + (turnState === 0 && "yourTurn")}>
                Player1
            </div>
            <div id="player2" className={"turn " + (turnState === 1 && "yourTurn")}>
                Player2
            </div>
        </div>
    );
};
