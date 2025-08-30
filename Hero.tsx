import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/mangrove-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mangrove forest ecosystem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-ocean-deep/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Protect Mangrove
              <span className="block text-accent">Ecosystems Together</span>
            </h1>
            
            <p className="text-xl text-ocean-light max-w-2xl">
              Join coastal communities worldwide in monitoring and protecting vital mangrove forests. 
              Report incidents, earn rewards, and make a real impact on environmental conservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/report">
                <Button 
                  size="lg" 
                  className="bg-gradient-sunset hover:opacity-90 shadow-glow text-lg px-8 py-6 group"
                >
                  Start Reporting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/community">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Join Community
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">2,500+</div>
                <div className="text-sm text-ocean-light">Active Guardians</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">15,000</div>
                <div className="text-sm text-ocean-light">Reports Submitted</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-sm text-ocean-light">Action Success Rate</div>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="lg:flex lg:justify-center hidden">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-float">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Protection</h3>
                <p className="text-ocean-light">Instant incident reporting with AI validation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Community Power</h3>
                <p className="text-ocean-light">Connect with local guardians and experts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <BarChart3 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Impact Tracking</h3>
                <p className="text-ocean-light">See your contribution to conservation efforts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;