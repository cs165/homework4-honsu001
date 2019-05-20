// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(url, theme) {
	this.music_container = document.querySelector("#music");
	this.song = url;
	this.theme = theme;
	this.pause = false;
    this._onKick = this._onKick.bind(this);
	
	this.play_button_container = document.querySelector('#play-button');
	this.click_button = this.click_button.bind(this);
	this.play_button = new PlayButton(this.play_button_container, this.click_button);
	
	this.audioplayer = new AudioPlayer();
	this.audioplayer.setSong(this.song);
	this.audioplayer.setKickCallback(this._onKick);
	this.audioplayer.play();
	
	this.gif_display = new GifDisplay(this.theme);
  }
  // TODO(you): Add methods as necessary.
  
  click_button(event){
	event.preventDefault();
	if (this.pause === false){
		this.audioplayer.pause();
		this.play_button_container.src = 'images/play.png';
		this.pause = true;
	}
	else{
		this.audioplayer.play();
		this.play_button_container.src = 'images/pause.png';
		this.pause = false;
	}
  }

  _onKick() {
    //console.log('kick');
	this.gif_display.change();
  }
  
  show() {
    this.music_container.classList.remove('inactive');
  }

  hide() {
    this.music_container.classList.add('inactive');
  }
}
