const nestedArray = [1, [2, 3], [4, [5, 6]]];
let res=[]
function flattArray(arr){
    console.log(arr);
    arr.forEach(element => {
        if(Array.isArray(element)){
            console.log(element);
        flattArray(element)}
            else{
                console.log(element,  " normal ");
                res.push(element)
                
            }
            
        })
        
    }
    

flattArray(nestedArray)
console.log(res ,'res Array');
