// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(play_button_container, click_button) {
    // TODO(you): Implement the constructor and add fields as necessary.
	this.play_button_container = play_button_container;
	this.click_button = click_button;
	this.play_button_container.addEventListener("click", this.click_button)
  }
  // TODO(you): Add methods as necessary.
}
