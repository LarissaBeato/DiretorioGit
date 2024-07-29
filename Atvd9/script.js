document.getElementById('botton').addEventListener('click', function() {
    const prime = findNthPrime(1001);
    document.getElementById('result').innerText = `${prime}`;
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}
