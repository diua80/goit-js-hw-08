import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import storage from './storage';


const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const LOCALKEY = 'timevideo';


const onPlay = throttle(function(data){
    
    const currentTime = data.seconds;
    
    console.log('Current time:', currentTime);

}, 1000);

player.on('timeupdate', onPlay);