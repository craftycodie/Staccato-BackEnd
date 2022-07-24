import { injectable } from 'inversify';
import * as config from '../../settings.json';

@injectable()
export default abstract class AbstractJsonFileSettings<T> {
    protected getFullConfig(): any {
        return config;
    }

    public abstract get(): T;
}