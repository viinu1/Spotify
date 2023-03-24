import React, { useContext } from 'react';
import { songs } from '~/Context';

export default function DetailsSong() {
    const { song } = useContext(songs);
    console.log(song);
    return (
        <div className="p-3 md:col-span-1">
            <h2 className="font-bold text-cyan-500">Now Playing</h2>
            <div className="flex gap-6 mt-4">
                <div className="w-[200px]">
                    <img className="w-full rounded-full" src={song.links.images[1].url} alt={song.name}></img>
                </div>
                <div className="mt-3">
                    <h2 className="mb-4 text-2xl text-red-900">{song.name}</h2>
                    <span className="text-2xl text-cyan-500">{song.author}</span>
                </div>
            </div>
        </div>
    );
}
