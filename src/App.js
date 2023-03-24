import { useState } from 'react';
import DetailsSong from './components/Component/DetailsSong';
import ListsSong from './components/Component/ListsSong';
import Navbar from './components/Component/Navbar';
import Playing from './components/Component/Playing';
import { songs } from './Context';
import dataSongs from './data/songs.json';

function App() {
    const [song, setSong] = useState(dataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = dataSongs.find((song) => song.id === idSong);

        if (!song) {
            setSong(dataSongs[0]);
        } else {
            setSong(song);
        }
    };

    return (
        <div className="App">
            <songs.Provider value={{ dataSongs, song, handleSetSong }}>
                <Navbar />
                <div className="grid grid-rows-1 gap-4 md:grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    {/* SPAN1  */}
                    <DetailsSong />
                    {/* SPAN 2 */}
                    <ListsSong className="sm:w-0" />
                </div>
                <Playing />
            </songs.Provider>
        </div>
    );
}

export default App;
