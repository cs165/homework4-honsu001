// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(theme) {
    // TODO(you): Implement the constructor and add fields as necessary.
	this.gif_display_containter = document.querySelector('#gif-display');
	this.foreground = document.querySelector("#foreground");
    this.background = document.querySelector("#background");
	this.theme = theme;
	this.gif_url = "https://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(this.theme) + "&rating=g&limit=25&api_key=dmL1PTExxXifuljS8M39DIaimPwH9D9F";
	this.gifs = [];
	this.json_length = 0;
	this.current_gif = null;
	
	this.onSuccess = this.onSuccess.bind(this);
	this.onFail = this.onFail.bind(this);
	this.check_gif_data = this.check_gif_data.bind(this);
	
	fetch(this.gif_url).then(this.onSuccess, this.onFail);
  }
  // TODO(you): Add methods as necessary.
  onSuccess(success){
	  success.json().then(this.check_gif_data);
  }
  
  check_gif_data(json){
	if(json.data.length < 2){
		const error_container = document.querySelector("#error");
		error_container.classList.remove("inactive");
	}
	else{
		this.json_length = json.data.length;
		for(let i = 0; i < this.json_length ; i++){
			this.gifs[i] = json.data[i].images.downsized.url;
		}
		const gif = new Image();
		gif.src = this.gifs[0];
		this.current_gif = 0;
		this.foreground.style.backgroundImage = 'url(' + gif.src + ')';
		
		gif.src = this.gifs[ this.get_index() ];
		this.background.style.backgroundImage = 'url(' + gif.src + ')';
     }
  }
  
  get_index(){
	  var index = this.current_gif;
	  while( this.current_gif === index ){
		  index = Math.floor(Math.random() * this.json_length);
	  }
	  this.current_gif = index;
	  return index;
	  
  }
  
  onFail(fail){
	console.log("Load gif failed");
  }
  
  change(){
	  this.foreground.style.backgroundImage = this.background.style.backgroundImage;
	  const gif = new Image();
	  gif.src = this.gifs[ this.get_index() ];
	  this.background.style.backgroundImage = 'url(' + gif.src + ')';
  }
  
}
