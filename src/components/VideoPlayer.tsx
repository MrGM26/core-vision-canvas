
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  src: string;
  thumbnail: string;
  title: string;
  duration: string;
  onClose?: () => void;
  isFullscreen?: boolean;
}

const VideoPlayer = ({ src, thumbnail, title, duration, onClose, isFullscreen = false }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    setShowFullscreen(!showFullscreen);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  if (showFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
          <Button
            onClick={() => setShowFullscreen(false)}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="relative w-full h-full max-h-[80vh] bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              poster={thumbnail}
              onEnded={handleVideoEnd}
              controls
              autoPlay={isPlaying}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={thumbnail}
        onEnded={handleVideoEnd}
        muted={isMuted}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video overlay controls */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <Button
            onClick={togglePlay}
            className="bg-[#B8860B]/80 hover:bg-[#B8860B] text-white rounded-full p-3"
            size="sm"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" fill="currentColor" />
            ) : (
              <Play className="h-6 w-6" fill="currentColor" />
            )}
          </Button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              onClick={togglePlay}
              className="bg-transparent hover:bg-white/20 text-white p-1"
              size="sm"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              onClick={toggleMute}
              className="bg-transparent hover:bg-white/20 text-white p-1"
              size="sm"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            
            <span className="text-white text-sm">{duration}</span>
          </div>
          
          <Button
            onClick={toggleFullscreen}
            className="bg-transparent hover:bg-white/20 text-white p-1"
            size="sm"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Play button overlay when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={togglePlay}
            className="bg-[#B8860B]/90 hover:bg-[#B8860B] text-white rounded-full p-6 transform hover:scale-110 transition-transform duration-300"
          >
            <Play className="h-8 w-8" fill="currentColor" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
