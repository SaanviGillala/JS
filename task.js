const digits = []
for (let i = 0; i < 10000; i++) {
    digits.push(i) 
}
const filtered = digits.filter((itm)=>itm%2==0)
const filtered2 = digits.filter((item)=>item%5==0)
console.log(filtered)  
console.log(filtered2)