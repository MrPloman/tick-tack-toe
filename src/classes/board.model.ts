import { playerValues } from "../types/player-values.type";

export class BoardModel {
    structure: [[playerValues, playerValues, playerValues], [playerValues, playerValues, playerValues], [playerValues, playerValues, playerValues]];
    constructor(structure: [[playerValues, playerValues, playerValues], [playerValues, playerValues, playerValues], [playerValues, playerValues, playerValues]]) {
        this.structure = structure;
    }
}
