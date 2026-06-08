async function getMusic(){
  const input = document.getElementById('artist');
  const response = await fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${input.value}`);
  const data = await response.json();
  if (data.artists === null){
    let error;
    error = window.alert("Cannot find that artist. Try another artist name!");
  }
  const paragraph = document.getElementById("paragraph");
  paragraph.textContent = `${data.artists[0].strBiography}`;
  const photo = document.getElementById("Photo");
  photo.src = `${data.artists[0].strArtistThumb}`;
}



