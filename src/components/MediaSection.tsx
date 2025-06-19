
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const MediaSection = () => {
  const newsItems = [
    {
      id: '1',
      title: "Strategic Partnership Announcement",
      description: "Promax United announces new infrastructure development partnership across West Africa",
      date: "June 10, 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      id: '2',
      title: "Mining Operations Expansion",
      description: "New gold mining project launched in collaboration with international partners",
      date: "June 5, 2024",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop"
    },
    {
      id: '3',
      title: "Financial Technology Initiative",
      description: "Revolutionary fintech solutions to enhance banking infrastructure",
      date: "May 28, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  const videos = [
    {
      title: "Company Overview 2024",
      description: "Learn about our mission, vision, and strategic approach to investment",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      duration: "3:45",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      title: "Infrastructure Development Project",
      description: "Behind the scenes of our latest infrastructure development initiative",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop",
      duration: "5:20",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  return (
    <section id="media" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1a237e] mb-4">
            Media Center
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Stay updated with our latest news, announcements, and insights from our investment activities
          </p>
        </div>

        {/* News Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6 sm:mb-8 text-center sm:text-left">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3 px-4 sm:px-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{item.date}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-[#1a237e] group-hover:text-[#3949ab] transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <Link to={`/blog/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white text-xs sm:text-sm">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a237e] mb-6 sm:mb-8 text-center sm:text-left">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <VideoPlayer
                    src={video.src}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    duration={video.duration}
                  />
                </div>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-base sm:text-lg font-bold text-[#1a237e]">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm sm:text-base">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
