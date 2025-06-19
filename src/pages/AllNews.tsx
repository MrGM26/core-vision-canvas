
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";

const AllNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allNews = [
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
    },
    {
      id: '4',
      title: "Green Energy Investment",
      description: "Major investment in renewable energy projects across the region",
      date: "May 20, 2024",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop"
    },
    {
      id: '5',
      title: "Security Technology Advancement",
      description: "Next-generation security solutions for critical infrastructure protection",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      id: '6',
      title: "Agricultural Innovation Program",
      description: "Supporting sustainable agriculture through technology and investment",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop"
    },
    {
      id: '7',
      title: "Digital Banking Revolution",
      description: "Transforming financial services with cutting-edge digital solutions",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: '8',
      title: "Infrastructure Development Milestone",
      description: "Celebrating major progress in regional infrastructure projects",
      date: "April 28, 2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop"
    }
  ];

  const totalPages = Math.ceil(allNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

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
              All News
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with all our latest news, announcements, and insights
            </p>
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {currentNews.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
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
    </div>
  );
};

export default AllNews;
