export default interface Album {
    id: string;

    name: string;
    trackIds: string[];

    deleted: boolean;
}