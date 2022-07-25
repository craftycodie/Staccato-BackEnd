import { Injectable } from "@nestjs/common";
import AbstractJsonFileSettings from "../../AbstractJsonFileSettings";
import { PresentationSettingsProps } from "./IPresentationSettings";

@Injectable()
export default class PresentationSettings extends AbstractJsonFileSettings<PresentationSettingsProps> {
    public get() {
        return <PresentationSettingsProps>(this.getFullConfig().presentation)
    }
}