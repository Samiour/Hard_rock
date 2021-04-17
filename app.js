const searchSongs =()=>{
    const searchText = document.getElementById('searchField').value;
    const url =`https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then (data=>displaySongs(data.data))
    .catch(error=>displayError());
}

    const displaySongs = songs =>{
        const songContainer = document.getElementById('song-container');
        songContainer.innerHTML='';
        songs.forEach(song=>{
            const songDiv =document.createElement('div');
            songDiv.className='single-result row align-items-center my-3 p-3';
            // console.log(song);
            
            songDiv.innerHTML=`
            
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>

                <audio controls>
                <source src="${song.preview}" type="audio/ogg">
                </audio>

            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        
            `
            songContainer.appendChild(songDiv);
        });
    }

  const getLyric=(artist,title)=>{
    //   console.log(artist,title);
      const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    //   console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLyrics(data.lyrics))
  }
  const displayLyrics= lyrics=>{
     const showLyrics = document.getElementById('lyricsDiv');
     showLyrics.innerText=lyrics;
  }
   const displayError=()=>{
    alert("Something went wrong");
   }
      
   
   


