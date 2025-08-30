import { Camera, MapPin, Award, Smartphone, Satellite, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import communityImage from "@/assets/community.jpg";
import monitoringImage from "@/assets/monitoring-app.jpg";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Photo Reporting",
      description: "Capture geotagged photos of incidents with automatic metadata collection for evidence."
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Precise location tracking ensures accurate incident mapping and quick response."
    },
    {
      icon: Brain,
      title: "AI Validation",
      description: "Machine learning algorithms verify reports and detect environmental threats automatically."
    },
    {
      icon: Award,
      title: "Gamification",
      description: "Earn points, badges, and climb leaderboards while protecting the environment."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Report incidents via mobile app or SMS - accessible to all community members."
    },
    {
      icon: Satellite,
      title: "Satellite Data",
      description: "Integration with satellite imagery provides comprehensive environmental monitoring."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-mangrove-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Monitoring Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering communities with cutting-edge technology to protect and preserve 
            mangrove ecosystems for future generations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-nature transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              How Communities Make Impact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Spot & Report</h4>
                  <p className="text-muted-foreground">Community members identify illegal cutting, pollution, or other threats to mangrove areas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">AI Verification</h4>
                  <p className="text-muted-foreground">Advanced algorithms analyze photos and cross-reference with satellite data for accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Immediate Action</h4>
                  <p className="text-muted-foreground">Authorities receive real-time alerts to respond quickly and effectively to environmental threats.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={communityImage}
              alt="Community working together"
              className="rounded-2xl shadow-nature w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card rounded-2xl shadow-ocean border border-border/50 p-4">
              <img
                src={monitoringImage}
                alt="Monitoring app interface"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;