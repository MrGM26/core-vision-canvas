
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog data - in a real app, this would come from an API
  const blogPosts = {
    '1': {
      id: '1',
      title: "Strategic Partnership Announcement",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Promax United is excited to announce a groundbreaking strategic partnership that will revolutionize infrastructure development across West Africa.</p>
          
          <h2>Partnership Overview</h2>
          <p>This new alliance brings together industry leaders in construction, technology, and sustainable development to create lasting impact across the region. Our partnership focuses on three key areas:</p>
          
          <ul>
            <li><strong>Infrastructure Development:</strong> Building modern transportation networks, communication systems, and urban planning solutions</li>
            <li><strong>Technology Integration:</strong> Implementing cutting-edge technologies to enhance project efficiency and sustainability</li>
            <li><strong>Community Impact:</strong> Ensuring local communities benefit from development projects through job creation and skills training</li>
          </ul>
          
          <h2>Project Timeline</h2>
          <p>The partnership will roll out in three phases over the next 24 months:</p>
          
          <h3>Phase 1: Foundation (Months 1-8)</h3>
          <p>Establishing operational frameworks, conducting feasibility studies, and securing regulatory approvals across target markets.</p>
          
          <h3>Phase 2: Implementation (Months 9-16)</h3>
          <p>Beginning construction on priority projects, launching community engagement programs, and establishing local partnerships.</p>
          
          <h3>Phase 3: Expansion (Months 17-24)</h3>
          <p>Scaling successful initiatives, expanding to additional markets, and establishing long-term sustainability programs.</p>
          
          <h2>Expected Impact</h2>
          <p>This partnership is projected to create over 10,000 jobs, improve infrastructure for 2 million people, and generate $500 million in economic activity across the region.</p>
          
          <p>We remain committed to our mission of driving sustainable development while delivering exceptional returns for our investors and stakeholders.</p>
        </div>
      `,
      author: "Sarah Johnson",
      date: "June 10, 2024",
      location: "Ouagadougou, Burkina Faso",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    '2': {
      id: '2',
      title: "Mining Operations Expansion",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Our latest gold mining project represents a significant milestone in Promax United's expansion into the precious metals sector.</p>
          
          <h2>Project Details</h2>
          <p>Located in one of West Africa's most promising geological regions, this new mining operation combines traditional extraction methods with modern, sustainable practices.</p>
          
          <h2>Environmental Commitment</h2>
          <p>We are committed to responsible mining practices that protect local ecosystems while delivering value to our stakeholders.</p>
          
          <p>This project will create hundreds of local jobs and contribute significantly to the regional economy while maintaining our commitment to environmental stewardship.</p>
        </div>
      `,
      author: "Michael Chen",
      date: "June 5, 2024",
      location: "Ghana",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop",
      readTime: "3 min read"
    },
    '3': {
      id: '3',
      title: "Financial Technology Initiative",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Revolutionary fintech solutions are transforming banking infrastructure across emerging markets.</p>
          
          <h2>Innovation in Financial Services</h2>
          <p>Our latest fintech initiative focuses on providing accessible banking solutions to underserved communities across West Africa.</p>
          
          <h2>Technology Stack</h2>
          <p>Utilizing blockchain technology, mobile-first design, and AI-powered risk assessment to create inclusive financial products.</p>
          
          <p>This initiative will bring modern banking services to over 1 million people in the region.</p>
        </div>
      `,
      author: "Dr. Aminata Traore",
      date: "May 28, 2024",
      location: "Abidjan, Ivory Coast",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      readTime: "4 min read"
    }
  };

  const currentPost = blogPosts[id as keyof typeof blogPosts];
  
  // Get recommended posts (exclude current post)
  const recommendedPosts = Object.values(blogPosts).filter(post => post.id !== id).slice(0, 2);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Blog post not found</h1>
          <Link to="/" className="text-[#B8860B] hover:underline">Return to homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-lg mb-6 sm:mb-8">
            <img 
              src={currentPost.image} 
              alt={currentPost.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>

          {/* Article header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 leading-tight">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#B8860B]" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#B8860B]" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#B8860B]" />
                <span>{currentPost.location}</span>
              </div>
              <span className="text-[#B8860B] font-medium">{currentPost.readTime}</span>
            </div>
          </header>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#1a237e] prose-links:text-[#B8860B] prose-strong:text-[#1a237e] mb-12"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Recommended articles */}
          {recommendedPosts.length > 0 && (
            <section className="border-t pt-8 sm:pt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a237e] mb-6 sm:mb-8">
                Recommended Reading
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {recommendedPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-[#1a237e] group-hover:text-[#3949ab] transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] font-medium transition-colors"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
