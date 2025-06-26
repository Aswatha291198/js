let p1={
    name:'aswatha',
    age:23,
    describe:function(location){
        console.log(`${this.name} ${this.age} ${location}`);
        
    }

}
let p2={
    name:'aswath',
    age:23,
}
Function.prototype.myApply=function(context={},args=[]){
    console.log(this,'this keywor');
    console.log(context,'what context are we passing');
    if(typeof this!=='function'){
        throw new Error(this,'this is not a function')
    }
    context.fn=this
    context.fn(...args)
    
    
}
p1.describe.myApply(p2,['mumbai'])
let sparseArray = [];
sparseArray[0] = 'apple';
sparseArray[2] = 'banana';
sparseArray[5] = 'cherry';

console.log(sparseArray);