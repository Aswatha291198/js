const arrow=(n)=>{
console.log(this.name,'this inside arrow fn');

}
window.name='asasas'
arrow('n')
const obj = {
    name: 'example',
    arrowFunction: () => {
        console.log(this.name, 'this inside obj');
    }
};

obj.arrowFunction(); // This will not print "example" because `this` is not the object `obj`

