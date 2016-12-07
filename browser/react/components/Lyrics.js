import React from 'react';

export default function (props) {
  console.log(props);
  const artistChange = e => {
    props.setArtist(e.target.value);
  };

  const songChange = e => {
    props.setSong(e.target.value);
  };

  return (
    <div id="lyrics">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{props.text || 'Search above!'}</pre>
        <button onClick={props.handleSubmit}>Search for Lyrics</button>
      </form>
    </div>
  );

}