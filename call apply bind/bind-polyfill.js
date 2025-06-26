const person={
    name:'Aswatha',
    age:23
}
function greet(){
    return `${this.name}`
}
Function.prototype.myBind=function(context={},...boundArgs){
    if(typeof this!=='function'){
        throw Error(this,'this is not a function')
    }
    const targetValue=this


    return function(...args){
       return targetValue.apply(context,[...boundArgs,...args])
    }
}
const value=greet.myBind(person)
console.log(value());

