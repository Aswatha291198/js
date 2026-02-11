const apiKey='2e3367579c0e4feebf1151059242206'
const temField=document.querySelector('.temp')
const cityField=document.querySelector('.time_location p')
const dateField=document.querySelector('.time_location span')
const image=document.querySelector('.weather_condition img')
const conditionField=document.querySelector('.weather_condition span')
const searchField=document.querySelector('.searchField')
const formelement=document.querySelector('form')

formelement.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(searchField.value){
        fetchData(searchField.value)
    }

})

async function fetchData(city){
    try {
        const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        const response=await fetch(url)
        const data=await response.json()
        console.log(data);
        
        if(data.error){
            throw new error()
        }
        temField.textContent=`${data.current.temp_c} `
        cityField.textContent=data.location.name
        image.src=data.current.condition.icon
        image.alt='weather-icon'
        conditionField.textContent=data.current.condition.text
        searchField.value=''
    } catch (error) {
        console.log(error.message);
        
    }
    return 
}