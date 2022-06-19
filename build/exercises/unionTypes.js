"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unionTypesMain = () => {
    printStringOrNumber('Hello');
    printStringOrNumber(42);
};
exports.default = unionTypesMain;
function printStringOrNumber(input) {
    console.log(input);
}
