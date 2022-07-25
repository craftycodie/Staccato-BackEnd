import { Injectable } from "@nestjs/common";
import AbstractJsonFileSettings from "../../AbstractJsonFileSettings";
import { PersistanceSettingsProps } from "./IPersistanceSettings";

@Injectable()
export default class PersistanceSettings extends AbstractJsonFileSettings<PersistanceSettingsProps> {
    public get() {
        return <PersistanceSettingsProps>(this.getFullConfig().persistance)
    }
}