console.log("welcome to  spotify");

//initialize variables

let songIndex = 0;
let audioElement = new Audio('./songs/rightwhere.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems= Array.from(document.getElementsByClassName("songitems"));

//listing array of songs 
let songs = [
  {
    songName: "Right Where You Left Me",
    filePath: "rightwhere.mp3",
    coverPath: "cover1.jpg",
  },
  {
    songName: "All Too Well",
    filePath: "alltoowell.mp3",
    coverPath: "cover2.png",
  },
  {
    songName: "Champagne Problems",
    filePath: "champagne.mp3",
    coverPath: "cover3.jpg",
  },
  {
    songName: "Exile",
    filePath: "exile.mp3",
    coverPath: "cover4.jpg",
  },
  {
    songName: "You're On Your Own Kid",
    filePath: "onyourownkid.mp3",
    coverPath: "cover5.jpg",
  },
];

//to set the name and cover image for various songs using javascript
songitems.forEach((element, i)=>
{
  element.getElementsByTagName("img")[0].src= songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
}
)
// handling play and pause of songs
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

//change the sound according to position of progressbar
myprogressbar.addEventListener('change',()=>
{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
      audioElement.src='./songs/exile.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
  })
}



Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
  })
})