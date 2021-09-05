const calculateFuncs = [(a, b) => a + b, (a, b) => a * b, (a, b) => a - b, (a, b) => Math.floor(a / b)];

function getCalculationResults(nth, dp, N) {
    let nthResults = new Set();
    nthResults.add(Number(String(N).repeat(nth)));

    for (let i = 1; i < nth; i++) {
        for (const calculateFunc of calculateFuncs) {
                for (const item1 of dp[i].values()) {
                    for (const item2 of dp[nth - i].values()) {
                     
                        const result = calculateFunc(item1, item2);
                        nthResults.add(result);
                    }
                }
        }
    }
    console.log("" +nthResults);
    return nthResults;
}

function solution(N, number) {
    if (N === number) {
        return 1;
    }
    
    const dp = [];
    dp[1] = new Set([N]);
    
    for (let i = 2; i <= 8; i++) {
        dp[i] = getCalculationResults(i, dp, N);
                
        if (dp[i].has(number)) {
            return i;
        }
    }
    
    return -1;
}
solution(5,12)