import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Clock,
  Heart,
  Target,
  Lightbulb,
  Shield,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { config } from "@/lib/config";

export default function AboutPage() {
  const stats = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      value: config.stats.eventsCompleted,
      label: "Events Completed",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: config.stats.happyClients,
      label: "Happy Clients",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: config.stats.yearsExperience,
      label: "Years Experience",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: config.stats.successRate,
      label: "Success Rate",
      color: "from-teal-500 to-teal-600",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Passion Driven",
      description:
        "We genuinely love what we do, and it reflects in every event we create. Your celebration is our celebration.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Trust & Reliability",
      description:
        "We honor our commitments and maintain transparent communication throughout your event journey.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Creative Innovation",
      description:
        "Fresh ideas and creative solutions make each event unique and memorable for you and your guests.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Client First",
      description:
        "Your vision and satisfaction are our top priorities. We listen, understand, and deliver beyond expectations.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const whyChooseUs = [
    "Experienced professional team",
    "Comprehensive event planning",
    "Budget-friendly packages",
    "Trusted vendor network",
    "On-time execution guaranteed",
    "24/7 client support",
    "Customized solutions",
    "Quality assurance",
  ];

  const team = config.team;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/50 text-sm">
              <Target className="w-4 h-4 mr-2" />
              About {config.company.name}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Crafting Unforgettable
              <span className="block mt-2 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Celebrations Since {config.company.foundedYear}
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We transform ordinary moments into extraordinary memories through
              exceptional event planning, creative design, and flawless
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-blue-100 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} text-white mb-4`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-400/20 rounded-3xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-400/20 rounded-3xl -z-10"></div>
                <Card className="overflow-hidden border-4 border-white shadow-2xl py-0">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                    alt="Event Planning"
                    className="w-full h-[500px] object-cover"
                  />
                </Card>
              </div>

              {/* Right - Story */}
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-100">
                  Our Journey
                </Badge>
                <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Creating Magic, One Event at a Time
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    {config.company.name} was born from a simple yet powerful vision:
                    to transform ordinary celebrations into extraordinary
                    experiences that people cherish forever.
                  </p>
                  <p>
                    What started as a passion project in {config.company.foundedYear} has grown into a
                    full-service event management company trusted by hundreds of
                    clients across the region. Our journey has been marked by
                    countless smiles, joyful tears, and unforgettable moments.
                  </p>
                  <p>
                    We believe that every event, whether it's an intimate
                    birthday party or a grand wedding celebration, deserves the
                    same level of attention, creativity, and professional
                    execution. Our team brings together years of experience,
                    creative vision, and meticulous planning to ensure your
                    event is nothing short of magical.
                  </p>
                  <p className="font-semibold text-blue-900">
                    From the first consultation to the final farewell, we work
                    closely with our clients to understand their vision and
                    bring it to life - stress-free and perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-900 hover:bg-amber-100">
              Our Core Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our values guide every decision we make and every event we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-400"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Why Choose */}
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-100">
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Your Trusted Event Partner
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We combine experience, creativity, and professionalism to
                  deliver events that exceed expectations every single time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Mission & Vision */}
              <div className="space-y-6">
                <Card className="border-2 border-blue-100 hover:border-amber-400 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mt-1">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To deliver exceptional event management services that
                      exceed expectations and create lasting memories. We are
                      committed to understanding each client's unique vision and
                      bringing it to life with creativity, professionalism, and
                      meticulous attention to detail.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 hover:border-amber-400 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-linear-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900 mt-1">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To be the most trusted and preferred event management
                      company, known for creating magical moments and
                      transforming celebrations into unforgettable experiences.
                      We strive to set new standards in creativity, service
                      excellence, and customer satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 hover:bg-purple-100">
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              The People Behind Your Success
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A dedicated team of professionals passionate about creating
              perfect events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 overflow-hidden py-0"
              >
                <div className="relative h-64 bg-linear-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's turn your vision into reality. Contact us today to start
            planning your perfect event.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg shadow-amber-500/50 transition">
              Get Started Now
            </button>
          </a>
        </div>
      </section> */}
    </div>
  );
}
