console.log('Welcome to Spotify');
//Initializing the variable
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let giff=document.getElementById('giff');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName: "Friends",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Enemy",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Lovely",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Night Changes",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Numb",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Who Says",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Memories",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Peaches",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Somebody Like U",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "Stay",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},

]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName(" songname")[0].innerText =songs[i].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
   { audioElement.play();
   masterPlay.classList.remove('fa-play');
   masterPlay.classList.add('fa-pause');
   giff.style.opacity =1;}
   else {
   audioElement.pause();
   masterPlay.classList.remove('fa-pause');
   masterPlay.classList.add('fa-play');
   giff.style.opacity =0;
   }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{

    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName(' songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');

})}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        giff.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
