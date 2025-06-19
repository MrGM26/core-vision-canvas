import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollToTop from "@/components/ScrollToTop";

const AllVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const allVideos = [
    {
      id: '1',
      title: "Company Overview 2024",
      description: "Learn about our mission, vision, and strategic approach to investment",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      duration: "3:45",
      date: "June 15, 2024",
      views: "2.1K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: '2',
      title: "Infrastructure Development Project",
      description: "Behind the scenes of our latest infrastructure development initiative",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop",
      duration: "5:20",
      date: "June 8, 2024",
      views: "1.8K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: '3',
      title: "Sustainable Mining Operations",
      description: "Discover how we're revolutionizing mining practices with environmental stewardship",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop",
      duration: "4:12",
      date: "May 30, 2024",
      views: "3.2K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: '4',
      title: "Financial Technology Innovation",
      description: "Revolutionary fintech solutions transforming banking infrastructure",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      duration: "6:30",
      date: "May 25, 2024",
      views: "2.5K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: '5',
      title: "Security Technology Advancement",
      description: "Next-generation security solutions for critical infrastructure protection",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      duration: "3:55",
      date: "May 20, 2024",
      views: "1.9K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: '6',
      title: "Green Energy Investment",
      description: "Major investment in renewable energy projects across the region",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
      duration: "4:45",
      date: "May 15, 2024",
      views: "2.8K",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  const totalPages = Math.ceil(allVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVideos = allVideos.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Page header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4">
              All Videos
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Watch all our featured videos and insights from our investment activities
            </p>
          </div>

          {/* Videos grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {currentVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <Link to={`/videos/${video.id}`}>
                  <div className="relative h-48 sm:h-56">
                    <VideoPlayer
                      src={video.src}
                      thumbnail={video.thumbnail}
                      title={video.title}
                      duration={video.duration}
                    />
                  </div>
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-base sm:text-lg font-bold text-[#1a237e] group-hover:text-[#3949ab] transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm sm:text-base">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pt-0">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Play className="h-3 w-3" />
                        <span>{video.views} views</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="mb-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
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

      <ScrollToTop />
    </div>
  );
};

export default AllVideos;
