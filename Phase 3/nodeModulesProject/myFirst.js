console.log("My first module");
function myMultiplier(x){
    return x*2;

}
let g = myMultiplier(8);
console.log(`the out put myfirst result ${g}`);
module.exports.myMultiplier = myMultiplier;

