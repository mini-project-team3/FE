import { useState, useEffect } from "react";

const Bgm = () => {
  const songs = [
    { src: "https://raw.githubusercontent.com/leejuae1020/introduction/master/Bgm.mp3", name: "Song 3" },
    {
      src: "https://raw.githubusercontent.com/leejuae1020/introduction/master/Charlie%20Puth-01-That's%20Hilarious.mp3",
      name: "Song 2",
    },
    {
      src: "https://raw.githubusercontent.com/leejuae1020/introduction/master/Charlie%20Puth-02-Dangerously.mp3",
      name: "Song 1",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const audioPlayer = document.getElementsByTagName("audio")[0];

    const handleNextSong = () => {
      if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      } else {
        setCurrentSongIndex(0);
      }
    };

    audioPlayer.addEventListener("ended", handleNextSong);

    return () => {
      audioPlayer.removeEventListener("ended", handleNextSong);
    };
  }, [currentSongIndex, songs]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <audio
          controls
          src={songs[currentSongIndex].src}
          autoPlay
          style={{ height: "20px", width: "290px", marginBottom: "20px" }}
        />
      </div>
    </div>
  );
};
export default Bgm;
