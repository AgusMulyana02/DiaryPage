import React, { useRef, useState, useEffect } from "react";
import musicFile from "./assets/virgoun.mp3";

function Header() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Toggle play/pause
    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Reset state ketika musik selesai
    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            setIsPlaying(false); // set state ke false ketika musik selesai
        };

        audio.addEventListener("ended", handleEnded);

        // Cleanup
        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <div>
            <div className="row p-2 bg-primary text-white">
                <div className="col-10">
                    <h3 className="mt-1 ms-5">WESITE GUE</h3>
                </div>
                <div className="col-2">
                    <i
                        className={`bi ${isPlaying ? "bi bi-pause-circle-fill" : "bi bi-apple-music"} fs-2`}
                        style={{ cursor: "pointer" }}
                        onClick={toggleMusic}
                    ></i>
                </div>
            </div>

            <audio ref={audioRef} src={musicFile}></audio>
        </div>
    );
}

export default Header;
