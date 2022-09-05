//隣接マスの処理がうまく書けなくてどうしたらいいか悩んだ => 2次元配列にするだけ
//塊で取り出す、というのがどうするのかわからなかった
function main(){
    const [column, row] = input[0].split(' ').map(number => parseInt(number));

    const map = [
        [].fill('0', 0, column - 1 + 2),//point1 変に条件を追加するより、問題になるケースをケアする形でinputを変更するという手法がある
        input
            .reject((value, key) => key === 0)
            .map(row => {
                row.unshift('0')
                row.push('0')
                return row;
            }),
        [].fill('0', 0, column - 1 + 2)
    ]

    let islandCount = 0;
    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= column; j++){
            if(map[i][j] === "1"){
                check(i, j);
                islandCount++;
            }
        }
    }

    console.log(islandCount);
}

function check(x, y){
    /**
     * point2 隣接マスの処理の仕方　起点となる座標を初めは引数にとって処理を開始
     * 起点を処理対象の配列に追加！
     * 隣接するものがあれば、機転の処理の後その座標も処理対象配列に追加
     */
    positions = [[x, y]];

    while(positions.length){
        let [x, y] = positions.shift();
        map[y, x] = 0;
        if(map[y, x + 1] === '1'){
            positions.push([y, x + 1]);
        }

        if(map[y, x - 1] === '1'){
            positions.push([y, x-1]);
        }

        if(map[y + 1, x] === '1'){
            positions.push([y + 1, x]);
        }

        if(map[y - 1, x] === '1'){
            positions.push([y - 1, x]);
        }
    }
}