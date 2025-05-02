import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
const AudioPlayer = ({ audioSrc, title, year, description, }) => {
    const audioRef = useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const toggleAudio = () => {
        if (!audioRef.current)
            return;
        if (isAudioPlaying) {
            audioRef.current.pause();
        }
        else {
            audioRef.current.play();
        }
        setIsAudioPlaying(!isAudioPlaying);
    };
    const handleTimeUpdate = () => {
        if (!audioRef.current)
            return;
        setProgress(audioRef.current.currentTime);
    };
    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setProgress(newTime);
        }
    };
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            const onLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);
            audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
            return () => {
                audioRef.current?.removeEventListener("loadedmetadata", onLoadedMetadata);
            };
        }
    }, []);
    return (_jsxs("div", { className: "w-full max-w-md bg-gradient-to-r from-seagreen/10 to-portuguesered/10 p-6 rounded-xl shadow-md mb-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-2", children: [_jsx("button", { onClick: toggleAudio, className: `p-4 rounded-full ${isAudioPlaying ? "bg-portuguesered" : "bg-seagreen"} text-white`, children: isAudioPlaying ? (_jsx(Pause, { className: "w-6 h-6" })) : (_jsx(Play, { className: "w-6 h-6", fill: "white" })) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: title }), _jsx("p", { className: "text-sm text-gray-600", children: year })] })] }), _jsxs("div", { className: "flex justify-end items-center gap-2 mb-4 mt-2", children: [_jsx(Volume2, { className: "w-4 h-4 text-seagreen" }), _jsx("input", { type: "range", min: "0", max: "1", step: "0.01", value: volume, onChange: handleVolumeChange, className: "w-24 accent-seagreen appearance-none bg-seagreen/20 h-1 rounded-full\n      [&::-webkit-slider-thumb]:appearance-none \n      [&::-webkit-slider-thumb]:bg-seagreen \n      [&::-webkit-slider-thumb]:rounded-full \n      [&::-webkit-slider-thumb]:w-3 \n      [&::-webkit-slider-thumb]:h-3" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-gray-600 w-12 text-right", children: formatTime(progress) }), _jsx("input", { type: "range", min: "0", max: duration, value: progress, step: "0.1", onChange: handleSeek, className: "w-full accent-seagreen appearance-none bg-seagreen/20 h-1 rounded-full \n            [&::-webkit-slider-thumb]:appearance-none \n            [&::-webkit-slider-thumb]:bg-seagreen \n            [&::-webkit-slider-thumb]:rounded-full \n            [&::-webkit-slider-thumb]:w-3 \n            [&::-webkit-slider-thumb]:h-3" }), _jsx("span", { className: "text-sm text-gray-600 w-12", children: formatTime(duration) })] }), _jsxs("audio", { ref: audioRef, className: "hidden", onTimeUpdate: handleTimeUpdate, onEnded: () => setIsAudioPlaying(false), preload: "metadata", children: [_jsx("source", { src: audioSrc, type: "audio/mp3" }), "Your browser does not support the audio element."] }), description && (_jsxs("p", { className: "text-xs italic mt-4 text-center", children: ["Hamburg Radio FSK 93,0 MHz Antenne", " "] }))] }));
};
export default AudioPlayer;
