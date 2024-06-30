// the purpose of this is to channge the scroll-behaviour height
// of recently played section

//------------------------
// get the height of similar artist section
const similarArtistSection = document.getElementById('similar-artists');
const similarArtistsHeight = similarArtistSection.offsetHeight;
document.documentElement.style.setProperty('--similar-artist-height', similarArtistsHeight+'px');
