// optional parameters
function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song} | ${singer}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok