const ChessMock = {
    chessValidator : new ChessStepValidator(),
    chessItems     : {
        'a_2' : {
            type: 'pawn',
            field: '1_2',
            checks: ['checkDialgonalStep', 'checkStraightStep']
        },
        'b_1' : {
            type: 'knight',
            field: '2_1',
            checks: ['checkSquareStep']
        }
    }
};

/**
 * Test diagonal steps
 * --------------------------------------
 */
console.log("/*************************************/");
console.log("Check diagonal step is true");
console.log("Test: ", ChessMock.chessValidator.checkDialgonalStep(1, 2, 2, 3));
console.log("Check diagonal step is false");
console.log("Test: ", ChessMock.chessValidator.checkDialgonalStep(1, 2, 2, 4));

/**
 * Test straight steps
 * --------------------------------------
 */
console.log("/*************************************/");
console.log("Check pawn straight step is true");
console.log("Test: ", ChessMock.chessValidator.checkStraightStep(1, 2, 1, 3, true));
console.log("Check pawn straight step on same row is false");
console.log("Test: ", ChessMock.chessValidator.checkStraightStep(1, 2, 2, 2, true));

/**
 * Test square steps
 * --------------------------------------
 */
console.log("/*************************************/");
console.log("Check square step is true");
console.log("Test: ", ChessMock.chessValidator.checkSquareStep(3, 2, 5, 1));
console.log("Check square step is false");
console.log("Test: ", ChessMock.chessValidator.checkSquareStep(3, 2, 5, 2));

/**
 * Test step by item configuration
 * --------------------------------------
 */
console.log("/*************************************/");
console.log("Check pawn step is true");
console.log("Test: ", ChessMock.chessValidator.checkItemStep(ChessMock.chessItems['a_2'], [2, 3]));
console.log("Check pawn step is false");
console.log("Test: ", ChessMock.chessValidator.checkItemStep(ChessMock.chessItems['a_2'], [3, 3]));

console.log("/*************************************/");
console.log("Check knight step is true");
console.log("Test: ", ChessMock.chessValidator.checkItemStep(ChessMock.chessItems['b_1'], [3, 3]));
console.log("Check knight step is false");
console.log("Test: ", ChessMock.chessValidator.checkItemStep(ChessMock.chessItems['b_1'], [6, 3]));