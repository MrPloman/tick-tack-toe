export interface Props {
    counter: {
        0: number;
        1: number;
    };
}
export const ScoreComponent: React.FC<Props> = ({ counter }) => {
    return (
        <div>
            {counter[0]} - {counter[1]}
        </div>
    );
};
