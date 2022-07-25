export interface PersistanceSettingsProps {
    host: string;
    user: string;
    password: string;
    database: string;
}

export default interface IPersistanceSettings {
    get(): PersistanceSettingsProps;
}