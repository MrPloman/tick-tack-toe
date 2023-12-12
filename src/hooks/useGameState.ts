/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { BoardStructure } from "../variables/boardStructure";
import { BoardModel } from "../classes/board.model";
import { playerValues } from "../types/player-values.type";

export const useGameState = () => {
    const [boardState, setBoard] = useState<BoardModel>(BoardStructure);
    const [turnState, setTurn] = useState<playerValues>(0);
    const [winnerState, setWinner] = useState<playerValues | undefined>(undefined);

    const [counterGameState, setcounterGameState] = useState<{ 0: number; 1: number }>({
        0: 0,
        1: 0,
    });

    function playerMovement(
        rowPosition: number,
        columnPosition: number,
        player: playerValues
    ): void {
        const boardToModify = boardState;
        boardToModify.structure[rowPosition][columnPosition] = player;
        setBoard(boardToModify);
        checkBoardStatus(boardToModify);
        if (player === 0) setTurn(1);
        else setTurn(0);
    }
    function reset() {
        setTimeout(() => {
            setBoard(
                new BoardModel([
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                ])
            );
            setWinner(undefined);
        }, 300);
    }
    function setWinnerAndReset(winner: playerValues) {
        setWinner(winner);
        const updateCounter: { 0: number; 1: number } = {
            0: counterGameState[0],
            1: counterGameState[1],
        };
        if (winner !== -1) {
            ++updateCounter[winner];
            setcounterGameState(updateCounter);
        }
        reset();
    }
    function checkBoardStatus(board: BoardModel) {
        let winnerExist: playerValues | undefined = undefined;
        for (let index = 0; index < board.structure.length - 1; index++) {
            const verticalLength = board.structure.length;
            const horizontalLength = board.structure[index].length;
            console.log(verticalLength, horizontalLength);
            if (
                // first horizontal line
                (board.structure[0][0] === index &&
                    board.structure[0][1] === index &&
                    board.structure[0][2] === index) ||
                // second horizontal line
                (board.structure[1][0] === index &&
                    board.structure[1][1] === index &&
                    board.structure[1][2] === index) ||
                // third horizontal line
                (board.structure[2][0] === index &&
                    board.structure[2][1] === index &&
                    board.structure[2][2] === index) ||
                // first vertical line
                (board.structure[0][0] === index &&
                    board.structure[1][0] === index &&
                    board.structure[2][0] === index) ||
                // second vertical line
                (board.structure[0][1] === index &&
                    board.structure[1][1] === index &&
                    board.structure[2][1] === index) ||
                // third vertical line
                (board.structure[0][2] === index &&
                    board.structure[1][2] === index &&
                    board.structure[2][2] === index) ||
                // diagonal from right to left
                (board.structure[0][0] === index &&
                    board.structure[1][1] === index &&
                    board.structure[2][2] === index) ||
                // diagonal from left to right
                (board.structure[0][2] === index &&
                    board.structure[1][1] === index &&
                    board.structure[2][0] === index)
            ) {
                winnerExist = index;
            }
        }
        if (
            !board.structure[0].find((cellValue) => cellValue === -1) &&
            !board.structure[1].find((cellValue) => cellValue === -1) &&
            !board.structure[2].find((cellValue) => cellValue === -1)
        ) {
            winnerExist = -1;
        }
        if (winnerExist !== undefined && winnerExist !== -1) setWinnerAndReset(winnerExist);
        else if (winnerExist !== undefined && winnerExist === -1) {
            reset();
        }
    }
    return {
        boardState,
        turnState,
        winnerState,
        counterGameState,
        setcounterGameState,
        playerMovement,
        setWinner,
    };
};
