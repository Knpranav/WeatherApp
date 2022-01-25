

//our object weather
var weather = {
    'apiKey':'ed62e0360339103127f54550ed173945',
    //passing city req as our parameter
    weatherFetch: function (city) {
     
        //fetching based on city as an input from the user
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid="+this.apiKey)
        .then((res)=>res.json())
          .then((data)=> {
            this.displayWeather(data)
            console.log(data);
          })
          .catch((err)=>{
            console.log(err);
          });
    },

    displayWeather:function(data){
        //retreiving data from DATA
        const{name}=data;
        const{icon,description}=data.weather[0];//icon and description from the array in the obj
        const{temp,humidity,temp_max,temp_min}=data.main;//temp , min , max , humididty from data.main
        const{speed}=data.wind;//wind speed from data.wind

        //displaying our weather in HTML
        document.querySelector('.city').innerHTML= name.toUpperCase()
        document.querySelector('.icon').src='https://openweathermap.org/img/wn/'+ icon + '.png'
        document.querySelector('.temp').innerHTML= temp+'°C'
        document.querySelector('.description').innerHTML= description
        document.querySelector('.humidity').innerHTML = 'Humidity : '+humidity+'%'
        document.querySelector('.max').innerHTML = ' Max : '+temp_max+'°C';
        document.querySelector('.min').innerHTML = ' Min : '+temp_min+'°C';
        document.querySelector('.wind').innerHTML = 'Wind Speed : '+ speed+'kmph'
        document.querySelector('.search-bar').value=''
    
    },
    search:function(){
            var val = document.querySelector('.search-bar').value
            this.weatherFetch(val)
       
    }
};

//DOM action to trigger search
document.querySelector('.svg').addEventListener("click",function (){
    weather.search();
});
//DOM to trigger search even on ENTER
document.querySelector('.search-bar').addEventListener('keyup',function(event){
    if(event.key=='Enter')
    weather.search()
})