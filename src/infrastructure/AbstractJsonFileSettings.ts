import { Injectable } from '@nestjs/common';
import * as config from '../../settings.json';

@Injectable()
export default abstract class AbstractJsonFileSettings<T> {
    protected getFullConfig(): any {
        return config;
    }

    public abstract get(): T;
}