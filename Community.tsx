import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Star, Users, MapPin, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const leaderboard = [
    { rank: 1, name: "Maria Santos", points: 2850, reports: 47, location: "Philippines", badge: "Gold Guardian" },
    { rank: 2, name: "Ahmed Hassan", points: 2640, reports: 39, location: "Bangladesh", badge: "Conservation Hero" },
    { rank: 3, name: "Elena Rodriguez", points: 2420, reports: 35, location: "Ecuador", badge: "Mangrove Protector" },
    { rank: 4, name: "Raj Patel", points: 2180, reports: 31, location: "India", badge: "Eco Warrior" },
    { rank: 5, name: "Ana Costa", points: 1960, reports: 28, location: "Brazil", badge: "Green Guardian" }
  ];

  const recentActivity = [
    { user: "Carlos M.", action: "Reported illegal cutting", location: "Costa Rica", time: "2 hours ago", points: 50 },
    { user: "Fatima K.", action: "Verified incident report", location: "Indonesia", time: "4 hours ago", points: 25 },
    { user: "John D.", action: "Submitted pollution evidence", location: "Florida, USA", time: "6 hours ago", points: 75 },
    { user: "Priya S.", action: "Completed training module", location: "Sri Lanka", time: "8 hours ago", points: 30 }
  ];

  const achievements = [
    { name: "First Report", description: "Submit your first incident report", icon: Star, unlocked: true },
    { name: "Photo Expert", description: "Upload 10 high-quality photos", icon: Medal, unlocked: true },
    { name: "Community Helper", description: "Verify 5 other reports", icon: Users, unlocked: false },
    { name: "Guardian Elite", description: "Reach 1000 points", icon: Trophy, unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ocean-light/10">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Guardian Community
          </h1>
          <p className="text-xl text-muted-foreground">
            Join thousands of environmental protectors worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="shadow-nature border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-accent" />
                  Top Guardians This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:bg-muted/50 ${
                        index < 3 ? 'bg-gradient-to-r from-accent/10 to-transparent border border-accent/20' : 'bg-muted/20'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-gradient-sunset' : 
                          index === 1 ? 'bg-gradient-nature' : 
                          index === 2 ? 'bg-gradient-ocean' : 'bg-muted'
                        }`}>
                          {user.rank}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{user.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {user.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">{user.points}</div>
                        <div className="text-sm text-muted-foreground">{user.reports} reports</div>
                        <Badge variant="outline" className="mt-1 text-xs">{user.badge}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-nature border-border/50 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Recent Community Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium text-foreground">{activity.user}</div>
                        <div className="text-sm text-muted-foreground">{activity.action}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location} • {activity.time}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        +{activity.points} pts
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Progress */}
            <Card className="shadow-nature border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Level 3 Guardian</span>
                      <span>750/1000 pts</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">250 points to Level 4</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-xs text-muted-foreground">Reports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">750</div>
                      <div className="text-xs text-muted-foreground">Total Points</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-nature border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        achievement.unlocked 
                          ? 'bg-accent/10 border border-accent/20' 
                          : 'bg-muted/20 opacity-60'
                      }`}
                    >
                      <achievement.icon
                        className={`h-6 w-6 ${
                          achievement.unlocked ? 'text-accent' : 'text-muted-foreground'
                        }`}
                      />
                      <div>
                        <div className={`font-medium text-sm ${
                          achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {achievement.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="shadow-nature border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">2,547</div>
                    <div className="text-sm text-muted-foreground">Active Guardians</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">15,293</div>
                    <div className="text-sm text-muted-foreground">Reports This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">847</div>
                    <div className="text-sm text-muted-foreground">Actions Taken</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;