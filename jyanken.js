function main(inputs){
    const [numberOfJanken, totalOfFingers] = inputs[0].split(' ').map(number => parseInt(number));
    const enemySelections = inputs[1].split('');

    const countG = enemySelections.filter(selection => selection === 'G').length;
    const countC = enemySelections.filter(selection => selection === 'C').length;
    // const countP = enemySelections.filter(selection => selection === 'P').length
    const countP = numberOfJanken - countG - countC;//当然相手型の手の出す回数も同じ

    let maxNumberOfVictories = 0;
    let maxOfP = totalOfFingers / 5;
    for(let p = 0; p <= maxOfP; p++){//指の最大値からpの上限数を絞ることができた　改善点１　totalOfFingers/5 が最大値だ！
        for(let c = 0; c <= numberOfJanken - p; c++){//ここは素晴らしい　最大値からパーの回数を引いたものだね
            if(totalOfFingers === 5*p + 2*c){
                //minの引数にとることで勝利数を求めるという考え方が一番驚き　全く発想になかった
                let numberOfVictories = Math.min(countG, p) + Math.min(countC, numberOfJanken - p - c) + Math.min(countP, c)
                maxNumberOfVictories = Math.max(maxNumberOfVictories, numberOfVictories) ;
            }
        }
    }
    console.log(maxNumberOfVictories);

}