// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Payback", artist: "James Brown", genre: "Funk" },
  { title: "Changes", artist: "Charles Barley", genre: "Soul" },
  { title: "Let's stay together", artist: "Al Green", genre: "R&B" },
  { title: "No Evil", artist: "Sir", genre: "R&B" },
  { title: "Found in a song", artist: "Rum.Gold", genre: "R&B" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },

  {
    title: "Do 4 Love",
    artist: "Tupac",
    genre: "Hip-Hop",
  },
  { title: "BlueSlides", artist: "SchoolBoy Q", genre: "Hip-Hop" },
  { title: "Die Hard", artist: "Kendrick Lamar", genre: "Hip-Hop" },
  { title: "Show Me What You Got", artist: "Jay-Z", genre: "Hip-Hop" },

  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rockets: "Soul",
  Groot: "Hip-Hop",
  Meredith: "Funk",

  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
  const playlists = Object.keys(guardians).map((guardian) => {
    const preferredGenre = guardians[guardian];
    const playlist = {
      guardian: guardian,
      songs: songs.filter((song) => song.genre === preferredGenre),
    };
    return playlist;
  });
  return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
playlists.forEach((playlist) => {
  const playlistDiv = document.createElement("div");
  playlistDiv.classList.add("playlist");

  const guardianHeader = document.createElement("h2");
  guardianHeader.textContent = `${playlist.guardian}'s Playlist`;
  playlistDiv.appendChild(guardianHeader);

  const songList = document.createElement("ul");
  playlist.songs.forEach((song) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${song.title} - ${song.artist}`;
    songList.appendChild(listItem);
  });
  playlistDiv.appendChild(songList);

  document.getElementById("playlists").appendChild(playlistDiv);
});
