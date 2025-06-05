export const calculateLCS = (str1: string, str2: string) => {
    const len1: number = str1.length
    const len2: number = str2.length

    // 各位置の最大長記録
    // const dp: Array<number[]> = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0))
    const dp: Array<number[]> = Array.from({ length: len1 + 1 }, () =>   // AI作成
        new Array(len2 + 1).fill(0)
    )

    for (let row = 0; row < len1; row++) {
        for (let column = 0; column < len2; column++) {
            if (str1[row] === str2[column]) {
                dp[row + 1][column + 1] = dp[row][column] + 1  // 一致するなら 斜め左 + 1
            }
            else {
                dp[row + 1][column + 1] = Math.max(dp[row + 1][column], dp[row][column + 1])  // 一致しないなら 左 or 上 の最大値 を使う
            }
        }
    }
    console.log(dp)
    
    const common: string[] = [] // 最大長共通部分列
    let row_search: number = len1
    let column_search: number = len2
    while (row_search > 0 && column_search > 0) {  // 最大長から遡る
        if (str1[row_search - 1] === str2[column_search - 1]) {  // 共通文字の場合
            common.push(str1[row_search - 1])
            row_search -= 1
            column_search -= 1
        }
        else {
            if (dp[row_search - 1][column_search] >= dp[row_search][column_search - 1]) {  // 共通文字でない場合 かつ 左の数字の方が大きい場合
                row_search -= 1
            }
            else {  // 共通文字でない場合 かつ 上の数字の方が大きい場合
                column_search -= 1
            }
        }
    }

    console.log(common)
    // 出力
    console.log(`=> ${common.length} (最長共通部分列: "${(common.reverse()).join("")}")`)

    return common.join("")
}