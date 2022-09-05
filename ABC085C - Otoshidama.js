import * as fs from 'fs';
const inputs = fs.readFileSync('/dev/stdin', 'utf8');


/**
 * 学び
 * 1,区切りで書くと半角スペースが入る
 * 2 b <= numberOfBill - a という書き方で最大値を設定すれば二重のforでも良い
 */
function test() {
    let numberOfTenThousandBill = -1;
    let numberOfFiveThousandBill = -1;
    let numberOfThousandBill = -1;

    const [numberOfBill, totalAmount] = '9 45000'.split(' ').map(splitted => parseInt(splitted));

    for (let a = 0; a <= numberOfBill; a++) {
        for (let b = 0; b <= numberOfBill - a; b++) {
            let c = numberOfBill - a - b;
            let total = 10000 * a + 5000 * b + 1000 * c;
            if (totalAmount === total) {
                numberOfTenThousandBill = a;
                numberOfFiveThousandBill = b;
                numberOfThousandBill = c;
                console.log(a, b, c);
                return;
            }
        }
    }
    console.log(-1, -1, -1)
}