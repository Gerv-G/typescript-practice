export class IllegalNegativeNumberError extends Error {
    constructor() {
        super("Illegal numbers are not allowed");
        this.name = "IllegalNegativeNumberError";

        Object.setPrototypeOf(this, IllegalNegativeNumberError.prototype);
    }
}