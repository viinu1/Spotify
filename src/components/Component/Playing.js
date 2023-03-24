import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '~/Context';

export default function Playing() {
    const { song, handleSetSong } = useContext(songs);

    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };
    const handleClickPrev = () => {
        handleSetSong(song.id - 1);
    };
    return (
        <div>
            <AudioPlayer
                className="bg-slate-900"
                showSkipControls={true}
                showJumpControls={false}
                src={song.url}
                layout="stacked-reverse"
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrev}
            />
        </div>
    );
}
