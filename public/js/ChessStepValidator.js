class ChessStepValidator {

    checkDialgonalStep(baseCharIndex, baseRowIndex, targetCharIndex, targetRowIndex) {

        let result = false;

        if (baseRowIndex !== targetRowIndex && baseCharIndex !== targetCharIndex) {
            let cacheIndex = (baseCharIndex > targetCharIndex) 
                ? baseCharIndex - targetCharIndex 
                : targetCharIndex - baseCharIndex;

            let rowIndex = (baseRowIndex > targetRowIndex) 
                ? baseRowIndex - targetRowIndex 
                : targetRowIndex - baseRowIndex;
            result =  !!(rowIndex === cacheIndex);
        }
        return result;
    }

    checkStraightStep(baseCharIndex, baseRowIndex, targetCharIndex, targetRowIndex, isPawn) {
        return !!(baseRowIndex === targetRowIndex && ! isPawn || baseCharIndex === targetCharIndex);
    }

    checkSquareStep(baseCharIndex, baseRowIndex, targetCharIndex, targetRowIndex) {

        if (baseRowIndex > targetRowIndex || baseRowIndex < targetRowIndex) {

            const rowId_0 = (baseRowIndex > targetRowIndex) ? baseRowIndex-2 : baseRowIndex+2;
            const rowId_1 = (baseRowIndex > targetRowIndex) ? baseRowIndex-1 : baseRowIndex+1;
            const charId_0 = (baseCharIndex > targetCharIndex) ? baseCharIndex-1 : baseCharIndex+1;
            const charId_1 = (baseCharIndex > targetCharIndex) ? baseCharIndex-2 : baseCharIndex+2;
            const allowedSteps = [
                charId_0 + '_' + rowId_0,
                charId_1 + '_' + rowId_1
            ];
            return !!(allowedSteps.indexOf(targetCharIndex+'_'+targetRowIndex) !== -1);
        }
        return false;
    }

    checkItemStep(item, step) {
        const base = item.field.split('_');
        let check = false;
        if (item.checks.length) {
            item.checks.some(func => {
                if (this[func]) {
                    let args = [parseInt(base[0], 10), parseInt(base[1], 10), step[0], step[1]];
                    if (func === 'checkStraightStep') {
                        args.push((item.type === 'pawn'));
                    }
                    check = this[func](...args);
                }
                if (check) {
                    return true;
                }
            });
        }
        return check;
    }
}