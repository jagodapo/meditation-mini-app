let titles = ["wind", "rain", "birds"]
let tracks = []


// creates audio object for each title in the array  and corresponding selectors
const loadTracks = function() {
    titles.forEach(title => {
        let  track = new Audio( `./audio/${title}.mp3`)
        track.name = title;
        track.enabled = true;
        track.loop = true;
        // setting selectors directly on audio objects (keeps them safe and ogranized) :)
        const sliderSelector  = `#${title}-slider`
        const sliderFillSelector = `.${title}-slider .fill`
        const cardSelector = `#${title}-card`
        track.slider = document.querySelector(sliderSelector.valueOf()); 
        track.fill = document.querySelector(sliderFillSelector.valueOf());
        track.card = document.querySelector(cardSelector.valueOf())

        // reset volume and slider styles to 0
        track.volume = 0;
        track.slider.value = track.volume
        track.fill.style.width = 0%
        console.log(track)

        // pushing each track onto tracks array
        tracks.push(track)
        console.log("check my slider")
        console.log(track.slider)
      
      })
}


const pauseTrack = function (_track) {
    _track.pause()
    _track.currentTime = 0
    _track.volume = 0;
}

const resetSlider = function (_track) {
    _track.slider.value = 0;
    _track.fill.style.width = "0%"
}

const setVolumeandSlider = function (_track) {
    _track.volume = 0.25;
    _track.slider.value = 0.25;
    _track.fill.style.width = `${_track.slider.value*100}%`
}


const playWindOnly = function(_tracks) {
  const wind =  _tracks.find(track => track.name === "wind")
    wind.play()
    setVolumeandSlider(wind)
}


export {titles, tracks, loadTracks, pauseTrack, resetSlider, setVolumeandSlider, playWindOnly }