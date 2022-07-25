export default interface Track {
    id: string;

    name: string;
    artist: string;
    genre: string[];

    deleted: boolean;
}