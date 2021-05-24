const btn =  document.querySelector('#btn');
const elIp =  document.querySelector('h3.ip');
const elLocal = document.querySelector('h3.local');
const elTime = document.querySelector('h3.time');
const elIsp = document.querySelector('h3.isp');
const ip = document.querySelector('#ip');

//https://geo.ipify.org/api/v1?apiKey=at_8TCNJtldA9uGpeMn3x69blBKetNbi&ipAddress=8.8.8.8



btn.addEventListener('click',function(){

    elIp.innerHTML = ip.value;

    var request = new XMLHttpRequest();
    request.open("GET","https://geo.ipify.org/api/v1?apiKey=at_8TCNJtldA9uGpeMn3x69blBKetNbi&ipAddress="+ip.value);

    request.onload = function(){
        if(this.status >= 200 && this.status < 400){
            var data = JSON.parse(this.response);
            elLocal.innerHTML = data.location.city+","+data.location.region;
            elIsp.innerHTML = data.isp;
            elTime.innerHTML = data.location.timezone+" | "+data.location.country;
            console.log(data.location.city);

            

        }else {
            console.log('ERRO!')
        }
        
    }

    request.onerror = function(){

    }

    request.send();

    

});

