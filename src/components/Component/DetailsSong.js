import React, { useContext } from 'react';
import { songs } from '~/Context';

export default function DetailsSong() {
    const { song } = useContext(songs);
    console.log(song);
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now Playing</h2>
            <div className="m-auto flex gap-6">
                <div className="w-[160px]">
                    <img className="w-full" src={song.links.images[0].url} alt=""></img>
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-400 text-xl mb-4">{song.name}</h2>
                    <span className="text-3xl">{song.author}</span>
                </div>
            </div>
        </div>
    );
}
