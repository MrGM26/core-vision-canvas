
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Play, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

const Videos = () => {
  const { id } = useParams();

  const videos = [
    {
      id: '1',
      title: "Company Overview 2024",
      description: "Learn about our mission, vision, and strategic approach to investment across multiple sectors in West Africa.",
      fullDescription: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Get an in-depth look at Promax United's comprehensive approach to strategic investments and sustainable development.</p>
          
          <h2>Our Mission</h2>
          <p>We are committed to driving economic growth through strategic investments in critical sectors including security, mining, infrastructure, energy, and financial services.</p>
          
          <h2>Investment Philosophy</h2>
          <p>Our investment approach focuses on long-term value creation while contributing to sustainable development across West Africa.</p>
          
          <h2>Key Highlights</h2>
          <ul>
            <li>Over $500M in managed investments</li>
            <li>15+ successful projects completed</li>
            <li>10,000+ jobs created across our portfolio</li>
            <li>Presence in 8 West African countries</li>
          </ul>
        </div>
      `,
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
      duration: "3:45",
      date: "June 15, 2024",
      views: "2.1K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: '2',
      title: "Infrastructure Development Project",
      description: "Behind the scenes of our latest infrastructure development initiative in rural communities.",
      fullDescription: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Explore our groundbreaking infrastructure development project that's transforming rural communities across the region.</p>
          
          <h2>Project Overview</h2>
          <p>This comprehensive infrastructure initiative focuses on building essential services including roads, water systems, and communication networks.</p>
          
          <h2>Community Impact</h2>
          <p>The project directly benefits over 50,000 residents through improved access to essential services and economic opportunities.</p>
          
          <h2>Sustainable Development Goals</h2>
          <p>Our approach aligns with UN SDGs, focusing on sustainable infrastructure that supports long-term community growth.</p>
        </div>
      `,
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=450&fit=crop",
      duration: "5:20",
      date: "June 8, 2024",
      views: "1.8K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: '3',
      title: "Sustainable Mining Operations",
      description: "Discover how we're revolutionizing mining practices with environmental stewardship at the forefront.",
      fullDescription: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Our innovative approach to mining combines traditional expertise with cutting-edge sustainable practices.</p>
          
          <h2>Environmental Responsibility</h2>
          <p>We prioritize environmental protection through advanced mining technologies and comprehensive restoration programs.</p>
          
          <h2>Community Partnership</h2>
          <p>Local communities are integral partners in our operations, benefiting from job creation and skills development programs.</p>
          
          <h2>Technology Innovation</h2>
          <p>We leverage the latest mining technologies to maximize efficiency while minimizing environmental impact.</p>
        </div>
      `,
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=450&fit=crop",
      duration: "4:12",
      date: "May 30, 2024",
      views: "3.2K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
  ];

  const currentVideoIndex = videos.findIndex(video => video.id === id);
  const currentVideo = videos[currentVideoIndex];
  
  const nextVideo = currentVideoIndex < videos.length - 1 ? videos[currentVideoIndex + 1] : null;
  const prevVideo = currentVideoIndex > 0 ? videos[currentVideoIndex - 1] : null;
  
  // Get other videos (exclude current video)
  const otherVideos = videos.filter(video => video.id !== id).slice(0, 2);

  if (!currentVideo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Video not found</h1>
          <Link to="/" className="text-[#B8860B] hover:underline">Return to homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main video content */}
            <div className="lg:col-span-2">
              {/* Video player */}
              <div className="relative mb-6 bg-black rounded-lg overflow-hidden aspect-video">
                <VideoPlayer
                  src={currentVideo.src}
                  thumbnail={currentVideo.thumbnail}
                  title={currentVideo.title}
                  duration={currentVideo.duration}
                />
              </div>

              {/* Video info */}
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-4">
                  {currentVideo.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#B8860B]" />
                    <span>{currentVideo.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-[#B8860B]" />
                    <span>{currentVideo.views} views</span>
                  </div>
                  <span className="text-[#B8860B] font-medium">{currentVideo.duration}</span>
                </div>

                <p className="text-slate-600 text-lg mb-6">
                  {currentVideo.description}
                </p>

                {/* Full description */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-[#1a237e] prose-links:text-[#B8860B] prose-strong:text-[#1a237e]"
                  dangerouslySetInnerHTML={{ __html: currentVideo.fullDescription }}
                />
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {prevVideo && (
                  <Link 
                    to={`/videos/${prevVideo.id}`}
                    className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow flex-1"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#B8860B]" />
                    <div className="text-left">
                      <p className="text-sm text-slate-500">Previous</p>
                      <p className="font-medium text-[#1a237e] truncate">{prevVideo.title}</p>
                    </div>
                  </Link>
                )}
                
                {nextVideo && (
                  <Link 
                    to={`/videos/${nextVideo.id}`}
                    className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow flex-1 justify-end text-right"
                  >
                    <div>
                      <p className="text-sm text-slate-500">Next</p>
                      <p className="font-medium text-[#1a237e] truncate">{nextVideo.title}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#B8860B]" />
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar with other videos */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-[#1a237e] mb-6">More Videos</h3>
              
              <div className="space-y-4">
                {otherVideos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <Link to={`/videos/${video.id}`}>
                      <div className="relative overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-[#1a237e] group-hover:text-[#3949ab] transition-colors line-clamp-2">
                          {video.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.date}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2024 Promax United Burkina Faso. All rights reserved. | Professional investment services across global markets.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Videos;
