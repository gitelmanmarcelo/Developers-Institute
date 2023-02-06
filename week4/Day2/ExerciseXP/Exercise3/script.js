// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic
//  location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
// and married to <partner's name> with <number of children> kids."

(function description(children,partner,location,job) {
    text = document.createTextNode('You will be a '+ job + ' in ' + location + ', and married to ' + 
    partner + ' with ' + children + ' kids.');
    document.body.appendChild(text); 
})(3,'Mary','Canada','doctor');