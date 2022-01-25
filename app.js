
var weather = {
    'apiKey':'ed62e0360339103127f54550ed173945',
    weatherFetch: function (city) {
     
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid="+this.apiKey)
        .then((res)=>res.json())
        //  .then((data)=>console.log(data))
          .then((data)=> {
            this.displayWeather(data)
            console.log(data);
          });  
    },

    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity,temp_max,temp_min}=data.main;
        const{speed}=data.wind;
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
document.querySelector('.svg').addEventListener("click",function (){
    weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup',function(event){
    if(event.key=='Enter')
    weather.search()
})