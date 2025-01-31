import { useRef, useState } from 'react';
import video from '../assets/video.mp4'; // Update the path to match your video location

const VideoPlayer = () => {
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    const toggleControls = () => {
        if (videoRef.current) {
            setShowControls(true); // Show controls when play button is clicked
            videoRef.current.controls = true;
        }
    };

    return (
        <div className="relative w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-[400px] lg:min-h-[600px] bg-gradient-to-b from-[#23385E] to-[#01132E] p-[10%]">
            {/* Video Container */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop // Ensures video always loops
                    muted
                    playsInline
                    controls={showControls} // Controls only show when 'showControls' is true
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Play Button (Always Visible) */}
                <div className="absolute right-4 bottom-8">
                    <button
                        onClick={toggleControls} // Shows controls when clicked
                        className="w-14 h-14 bg-[#01132E]/80 hover:bg-[#01132E] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-cyan-500/30"
                        aria-label="Play video"
                    >
                        {/* Play Icon */}
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M5 3l14 9-14 9V3z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Optional: Add loading state */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#01132E]/50 backdrop-blur-sm transition-opacity duration-300"
                     style={{ opacity: videoRef.current?.readyState < 3 ? 1 : 0, pointerEvents: videoRef.current?.readyState < 3 ? 'auto' : 'none' }}>
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
