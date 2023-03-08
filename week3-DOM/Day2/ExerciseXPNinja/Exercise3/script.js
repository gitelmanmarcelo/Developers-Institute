const onClick = () => {
    
    const latTxt = document.createTextNode('Latitude: ' + latitude);
    const lonTxt = document.createTextNode('Longitude: ' + longitude);
    const plat = document.createElement('p');
    plat.appendChild(latTxt);
    const plon = document.createElement('p');
    plon.appendChild(lonTxt);
    document.body.appendChild(plat);
    document.body.appendChild(plon);
}

let latitude;
let longitude;

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    latitude =  position.coords.latitude;
    longitude =  position.coords.longitude;
  }

document.querySelector('button')/addEventListener('click',onClick);