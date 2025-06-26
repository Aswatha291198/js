class Myclass{
    constructor(name,age,year){
        this.name=name
        this.age=age
        this.year=year

    }
    describe(){
        console.log(`hi my name is ${this.name} and my age is ${this.age} and my year is${this.year}`);
        
    }
}
const p=new Myclass('asqwatha','25','1998')
console.log(p.describe());
class MyAnotherClass extends Myclass{
    constructor(name,age,year){
        super(name,age,year)
    }
    describe()
    su

}
const p2=new MyAnotherClass('sasa','323','3444')
console.log(p2.describe());

