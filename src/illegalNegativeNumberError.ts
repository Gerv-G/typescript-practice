export class IllegalNegativeNumberError extends Error {
    constructor(negativeNumbers: number[]) {
        super("Negative numbers are not allowed: " + negativeNumbers);
        this.name = "IllegalNegativeNumberError";

        Object.setPrototypeOf(this, IllegalNegativeNumberError.prototype);
    }
}