function isPrime(n) {
    let check = 0;
    for(let i=2; i<Math.sqrt(n); ++i) {
        if(n%i ==0) {
            check = 1;
            break;
        }
    }
    if(check == 1) console.log("Number is Prime");
    else console.log("Number is Consonant")
}

function isArmstrong(n) {
    let m = n;
    let sum = 0;
    while(m != 0) {
        let d = m%10;
        sum += Math.pow(d, 3);
        m /= 10;
    }
    if(sum == n) console.log("Armstrong Number");
    else console.log("Not an Armstrong Number")
}

isPrime(153);
isArmstrong(153);