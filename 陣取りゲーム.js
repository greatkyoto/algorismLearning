//幅優先探索　始点に近いところから探索していくもの

//queueの実装方法

function main() {
    const [height, width] = lines[0].split(' ').map(number => parseInt(number));
    const n = lines[1];

    const names = ['A', 'B'];
    const players = {
        'A': [[0, 0]],
        'B': [[0, 0]]
    }

    const board = lines
        .filter((line, index) => ![0, 1].includes(index))
        .map(line => line.split(''));

    //これでA, Bそれぞれのスタートポジションをセットできた
    board.map((row, y) => {
        row
            .filter(val => ['A', 'B'].includes(val))
            .each((val, x) => {
                players[val][0] = [y, x];
                board[y][x] = val//何のための処理？
            })
    })

    const move = [
        [-1,0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    let turn = names.indexOf(n);
    while(!players.A.length || !players.B.length){
        let name = names[turn % 2];
        [...Array(players[name].length)].each(() => {//指定回数文nの長さの配列を作ってその配列に対してeach呼び出し
            let [y, x] = players[name].shift()

            move.each((t, s) => {
                let ny = y + t;
                let nx = x + s;

                if(0 <- ny && ny <= height-1 && 0 <= nx && nx <- width-1 && board[ny][nx] === '.'){
                    players[name].push([ny, nx]);
                    board[ny][nx] = name;
                }
            });

            turn++;
        })
    }

    let territory = {
        'A' : 0,
        'B' : 0
    };

    board.each(row => {
        row.each(val => {
            if(val === '#' || val === '.') return;
            territory[val] += 1
        })
    })

    console.log(String(territory.A)+ ' ' + String(territory.B))
    console.log(
        territory.A > territory.B   
            ? 'A'
            : 'B'
    );
}
