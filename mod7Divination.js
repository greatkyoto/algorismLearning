function main(inputs){

    const numbers = inputs
        .filter((row, index) => index !== 0)
        .map(number => parseInt(number));
    
    let groupedByRemainder = [];
    for(let a = 0; a < numbers.length; a++){
        let remainder = numbers[a] % 7;
        if(groupedByRemainder[remainder]){
            groupedByRemainder[remainder] ++;
        }else{
            groupedByRemainder[remainder] = 1;
        }
    }
    let total = 0;
    for(let i = 0; i < 7; i++){//0~7の中から重複を許して３つピックアップする　ただし、順番が違うだけのものは重複カウントしないようにする
        for(let j = i; j < 7; j++){//point3 組み合わせ問題の時、子のスタートは親のインクリメントにすればいい
            for(let k = j; k < 7; k++){
                if((i + j + k) % 7 === 0){
                    if(i === j === k) {
                        total += groupedByRemainder[i] * (groupedByRemainder[j] - 1) * (groupedByRemainder[k] - 1) / 6;
                    }else if(){

                    }
                }
            }
        }
    }
}

//point1 直接パターン全てを試していく方法ではなく、条件を読み替えてそれを検証できないか検討してみる
//point2 入力値を処理することでパターンをまとめられないか考える