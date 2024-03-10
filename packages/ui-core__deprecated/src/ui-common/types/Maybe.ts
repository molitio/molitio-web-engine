/*typescript helper class that returns T partial T or null */
export class Maybe<T> {
    constructor(private value: T | null) {}
    static of<T>(value: T | null): Maybe<T> {
        return new Maybe(value);
    }
    static empty<T>(): Maybe<T | null> {
        return new Maybe(null);
    }
    isEmpty(): boolean {
        return this.value === null;
    }
    get(): T | null {
        return this.value;
    }
}
