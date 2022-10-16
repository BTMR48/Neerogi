import React, { useState, useEffect } from "react";
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import PauseCircleOutlineSharpIcon from '@mui/icons-material/PauseCircleOutlineSharp';
import { red,blue} from '@mui/material/colors';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button style={{height: 50, width: 80, radius: 15, backgroundColor:blue[400]}} onClick={toggle}>{playing ? <PauseCircleOutlineSharpIcon /> : <PlayCircleOutlineSharpIcon />}</button>
    </div>
  );
};

export default Player;