// In this exercise, you will use object oriented programming concepts to define and use a custom 
// object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}.`);
    }
}

// Instantiate a new Video instance and call the watch() method.
const video1 = new Video('Harry Potter','John Doe',120);
video1.watch();

// Instantiate a second Video instance with different values.
const video2 = new Video('Titanic','Mary Jane',240);
video2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

const videoLib = [ {title: 'Spiderman', uploader: 'Clark Kent', time: 150}, 
{title: 'Wonderwoman', uploader: 'Stan Lee', time: 200}, 
{title: 'Thor', uploader: 'Jack Jones', time: 110}, 
{title: 'Superman', uploader: 'Rita Mason', time: 120}, 
{title: 'Captain America', uploader: 'Sarah Parker', time: 130}];



const video = [];
videoLib.forEach( (elem,index) => {
    // const {title,uploader,time} = videoLib[index];
    video[index] = new Video(videoLib[index]);
})

