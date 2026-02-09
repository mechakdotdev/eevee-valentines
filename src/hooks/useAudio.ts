import { useEffect, useRef, useState } from 'react';

export const useAudio = (audioUrl: string, autoPlay: boolean = true) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 1;
    audioRef.current = audio;

    if (autoPlay) {
      // Attempt to play and set state to true regardless
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Even if autoplay fails, set state to true for toggle button
        setIsPlaying(true);
      });
    } else {
      setIsPlaying(false);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audioUrl, autoPlay]);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return {
    play,
    pause,
    toggle,
    stop,
    isPlaying,
  };
};

