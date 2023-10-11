export declare global {
    interface ObjectConstructor extends globalThis.ObjectConstructor {
        keys<TObj>(object: TObj): Array<keyof TObj>
    }
}
