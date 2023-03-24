import React, { useContext, useEffect, useState } from 'react';
import { songs } from '~/Context';

export default function ListsSong() {
    const { dataSongs, handleSetSong, song } = useContext(songs);

    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };

    useEffect(() => {
        setIdSong(song.id);
    }, [song]);
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full ">
                <thead className="text-white h-3">
                    <tr className="text-center text-xl">
                        <td className="w-[10%] ">#</td>
                        <td className="text-left">Title</td>
                        <td className="w-[10%]">Author</td>
                        <td className="w-[10%]">
                            <i className="fa fa-download"></i>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {dataSongs.map((song) => (
                        <tr
                            key={song.id}
                            className={`bg-slate-600 h-10 text-gray-300 text-lg hover:bg-slate-900 hover:text-teal-300 
                            ${idSong === song.id && 'bg-slate-900 text-teal-300 '}`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{song.id}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className="fa fa-download"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
