// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(to_music) {
	this.menu_container = document.querySelector("#menu");
	this.themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
	this.onSuccess = this.onSuccess.bind(this);
	this.onFail = this.onFail.bind(this);
	this.load_songs_data = this.load_songs_data.bind(this);
	this.song_url = this.song_url.bind(this);
	
	this.json_file = null;
	this.songs = {};
	
	this.to_music = to_music;
	const go = document.querySelector("form");
	go.addEventListener("submit", this.to_music);
	
  }
  
  // TODO(you): Add methods as necessary.
  load_songs(){
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json').then(this.onSuccess, this.onFail);
  }
  
  onSuccess(success){
	success.json().then(this.load_songs_data);
  }
  
  load_songs_data(json){
	this.json_file = json;
	const song_selector_container = document.querySelector("#song-selector");
	for(const song in this.json_file){
		const song_option = document.createElement("option");
		song_option.value = this.json_file[song].title;
		song_option.innerHTML = this.json_file[song].title;
		this.songs[this.json_file[song].title] = song;
		song_selector_container.appendChild(song_option);
	}
	  
	const query_input_container = document.querySelector("#query-input");
	query_input_container.value = this.themes[Math.floor(Math.random() * this.themes.length)];
  }
  
  onFail(fail){
	console.log("Load song failed");
  }
  
  song_url(title){
	  return this.json_file[this.songs[title]].songUrl;
  }
  
  show() {
    this.menu_container.classList.remove('inactive');
  }

  hide() {
    this.menu_container.classList.add('inactive');
  }
}
