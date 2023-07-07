//Excersise 40
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(makeAlbum("Artist 1", "Album 1"));
console.log(makeAlbum("Artist 2", "Album 2", 12));
console.log(makeAlbum("Artist 3", "Album 3", 8));
