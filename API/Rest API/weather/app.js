$(document) .ready(function() {
    $.getJSON('current.city.list.json', function(data){
    $('select').on('change', function(){
        var out='';
        for (var key in data){
            if (data[key].country==$('select option: selected').val()){
                out+= `<p data-XXX="${data[key].id}">${data[key].name}</p>`;
            }
        }
        $('#city').html(out);
        $('#city p').on('click', function(){
            $get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    id:$(this).attr('value'),
                    "appid": "ccb32c048e20c9231b63123395cdc52c"
                },
                function(data) {
                    let out='';
                    out +='Погода: <b>'+data.weather[0].main+'</b><br>';
                    out +=' <p style="text-align:center"><img scr="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
                    out +='Температура: <b>'+Math.round(data.min.temp-273)+'&#176;C</b><br>';
                    out +='Влажность: <b>'+data.main.humidity+'%</b><br>';
                    out +='Давление: <b>'+Math.round(data.main.pressure*0.00750063755419211*100)+'мм.рт.ст</b><br>';
                    out +='Видимость: <b>'+(data.visibility/1000)+'км</b><br>'
                    console.log(data.main)
                    $('#weather').html(out)
                }
            )
        })
        })    
    }) 
})

//"https://api.openweathermap.org/data/2.5/weather"