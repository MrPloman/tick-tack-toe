import { BoardModel } from "../../classes/board.model";
import { playerValues } from "../../types/player-values.type";
import "./board.scss";
interface Props extends BoardModel {
    turn: playerValues;
    playerMovement: (indexRow: number, indexColumn: number, turn: playerValues) => void;
}

export const BoardComponent: React.FC<Props> = ({ structure, turn, playerMovement }) => {
    const playerIsAllowedToModify = (indexRow: number, indexColumn: number) => {
        if (structure[indexRow][indexColumn] !== 0 && structure[indexRow][indexColumn] !== 1) {
            playerMovement(indexRow, indexColumn, turn);
        }
    };

    return (
        <>
            <div id="board">
                {structure.map((row, indexRow) => (
                    <div className="row" key={indexRow}>
                        {row.map((column: playerValues, indexColumn) => (
                            <div
                                key={indexColumn}
                                onClick={() => playerIsAllowedToModify(indexRow, indexColumn)}
                                className={
                                    "square " +
                                    (column === 0 ? "player1" : column === 1 && "player2")
                                }
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
