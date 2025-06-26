let person1={
    name:'aswatha',
    age:26,
    print:function(){
        console.log(`${this.name} ${this.age}`);
        
    }
}
let person2={
    name:'something',
    age:26,
    
}
// person1.print.call(person2)
Function.prototype.MyCall=function(context={},...args){
    console.log(this,'this');
    console.log(context,'context')
    if(typeof  this!== 'function'){
        throw new console.error('this is not a function');
        
    }
    context.func=this
     const value= context.func(...args)
     console.log(value);
     
    
    
}
person1.print.MyCall(person2)