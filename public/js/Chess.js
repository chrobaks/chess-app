class Chess {

    constructor() {
        this.tempate = document.getElementById('app');
        this.itemConfig = {};
    }

    renderBoard() {
        
        const maxNum = 8;

        for ( let i = 0; i < maxNum; i++) {
            this.renderFields(i);
        }
    }

    renderFields(rowNum) {

        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let style = (rowNum % 2 === 0) ? '' : 'black';

        chars.forEach((value, index) => {
            const field = document.createElement("div");
            const rowId = chars[index] + '_' + rowNum;
            field.setAttribute('data-row-id', rowId);
            this.setFieldCss(field, style);
            if (rowNum < 2 || rowNum > 5) {
                this.renderItem(field, rowId, rowNum);
            }
            this.tempate.appendChild(field);
            style = (style === 'black') ? '' : 'black';
        });
    }

    renderItem(field, rowId, rowNum) {
        
        const item = document.createElement("div");
        const name = this.getItemName(rowId, rowNum);
        item.classList.add('chess-item');
        item.setAttribute('title', name);
        item.appendChild(document.createTextNode(name));
        field.appendChild(item);
    }

    setFieldCss(field, style) {
        field.classList.add('field');
        if (style !== '') {
            field.classList.add(style);
        }
    }

    getItemName(rowId, rowNum) {

        const itemNames = ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'];
        const idObj = rowId.split('_');

        let name = itemNames[0];

        if (rowNum === 0 || rowNum === 7) {

            switch(idObj[0]) {
                case 'a':
                case 'h':
                    name = itemNames[1];
                    break;
                case 'b':
                case 'g':
                    name = itemNames[2];
                    break;
                case 'c':
                case 'f':
                    name = itemNames[3];
                    break;
                case 'd':
                    name = itemNames[4];
                    break;
                case 'e':
                    name = itemNames[5];
                    break;
            }
        }
        
        return name;
    }
}

const chessInst = new Chess();