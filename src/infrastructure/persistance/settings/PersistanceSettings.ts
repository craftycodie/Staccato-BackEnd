import { injectable } from "inversify";
import AbstractJsonFileSettings from "../../AbstractJsonFileSettings";
import { PersistanceSettingsProps } from "./IPersistanceSettings";

@injectable()
export default class PersistanceSettings extends AbstractJsonFileSettings<PersistanceSettingsProps> {
    public get() {
        return <PersistanceSettingsProps>(this.getFullConfig().persistance)
    }
}