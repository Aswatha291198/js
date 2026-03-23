// function makeChai(){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//          console.log('chai is preparing');
//         const isOpen=Math.random() > 0.3
//         if(isOpen){
//             res('succcess')
//         }
//         else{
//             rej('failure')
//         }
//     },1000)
//        })
// }

// function makeBread(){
//     return new Promise((res,rej)=>{
//         console.log('bread is preparing');
//         setTimeout(()=>{
//             const isOpen=Math.random() > 0.2
//         if(isOpen){
//             res('succcess breadd')
//         }
//         else{
//             rej('failure bread')
//         }
//     })
//         },100)
// }

// makeChai().then((mes)=>{
//     console.log('then block',mes)
//     return makeBread
// })
// .then((result)=>{
//     console.log('then block insed',result)
// })
// .catch((err)=>{
//     console.log('something went error',err);
    
// })
// Promise.resolve(10)
//   .then((num) => {
//     num * 2;
//   })
//   .then((num) => console.log(num));
//   Promise.resolve(5)
//   .then((num) => num * 2)
//   .then((num) => num * 3)
//   .then((num) => console.log(num));


// const p1=new Promise((res,rej)=>{
//     const time=true
//    setTimeout(()=>{
//  if(time){
//         res('good')
//     }
//     else{
//         rej('bad')
//     }
//    },1000)
// })

// p1.then((res)=>{
// console.log(res);

// })

console.log('start');

setTimeout(()=>{
    console.log('timeout');
    
},100)

const p=new Promise((res,rej)=>{
    res('1 st promise')
    rej('error')
})
 
 async function getUser(){
    console.log('start inside funcot')
    return 'asasasas'
 }

 async function getData(){
    console.log('inside getdata');
    const user=await getUser()
    console.log(user,'user');
    
    console.log('after getuser');
    
    
 }
 getData()
console.log('end');



 
 
