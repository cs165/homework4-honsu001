// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
	const songs = "https://fullstackccu.github.io/homeworks/hw4/songs.json";
	this.to_music = this.to_music.bind(this);
	  
	this.menuscreen = new MenuScreen(this.to_music);
	
	
	this.menuscreen.load_songs();
  }
  // TODO(you): Add methods as necessary.
  to_music(){
	  event.preventDefault();
	  const song_name = document.querySelector("#song-selector").value;
	  const url = this.menuscreen.song_url(song_name);
	  const theme_name = document.querySelector("#query-input").value;
	  console.log("songvalue : " + song_name);
	  console.log("gifvalue : " + theme_name);
	  this.menuscreen.hide();
	  
	  this.musicscreen = new MusicScreen(url, theme_name);
	  this.musicscreen.show();
  }
}
