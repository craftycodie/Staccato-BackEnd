import { injectable } from "inversify";
import AbstractJsonFileSettings from "../../AbstractJsonFileSettings";
import { PresentationSettingsProps } from "./IPresentationSettings";

@injectable()
export default class PresentationSettings extends AbstractJsonFileSettings<PresentationSettingsProps> {
    public get() {
        return <PresentationSettingsProps>this.getFullConfig()
    }
}