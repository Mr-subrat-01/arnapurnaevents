import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Cake,
  Briefcase,
  Music,
  Home as HomeIcon,
  PartyPopper,
  ArrowRight,
  CheckCircle2,
  Award,
} from "lucide-react";
import ClientsCarousel from "@/components/ClientsCarousel";

export default function HomePage() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Weddings",
      description:
        "Transform your special day into an unforgettable celebration with our complete wedding planning services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cake className="w-12 h-12" />,
      title: "Birthday Parties",
      description:
        "Create magical birthday memories with themed decorations and entertainment for all ages",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Corporate Events",
      description:
        "Professional event management for conferences, seminars, and team building activities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "DJ Nights",
      description:
        "Energetic party nights with professional DJs, sound systems, and lighting arrangements",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <HomeIcon className="w-12 h-12" />,
      title: "House Warmings",
      description:
        "Traditional ceremonies with modern convenience and complete coordination",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <PartyPopper className="w-12 h-12" />,
      title: "All Celebrations",
      description:
        "Anniversary, engagement, baby shower, and every special moment you want to celebrate",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const features = [
    "Professional Team",
    "On-Time Execution",
    "Budget Friendly",
    "Creative Designs",
    "Full Coordination",
    "Quality Service",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-2 bg-amber-500/20 text-amber-300 border-amber-500/50 text-sm">
              ✨ Premium Event Management Services
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creating{" "}
              <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Magical Moments
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              From weddings to corporate events, DJ nights to house warmings -
              we make every celebration unforgettable with our professional
              event management services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/50"
                >
                  Plan Your Event <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
                >
                  View Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-100">
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive event management solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 overflow-hidden"
              >
                <CardHeader>
                  <div
                    className={`mb-4 w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-900 transition">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-linear-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
              >
                Explore All Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ClientsCarousel />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-lg">
                Experience the difference of working with true professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Expert Planning",
                  description:
                    "Years of experience in creating memorable events across all categories",
                },
                {
                  title: "Personalized Service",
                  description:
                    "Every event is unique, and we customize our services to match your vision",
                },
                {
                  title: "Vendor Network",
                  description:
                    "Trusted partnerships with the best vendors in the industry",
                },
                {
                  title: "Stress-Free Experience",
                  description:
                    "We handle all the details so you can enjoy your special day",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-100 hover:border-amber-400 hover:shadow-xl transition-all p-6"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
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
            Ready to Plan Your Dream Event?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's create something magical together. Contact us today for a free
            consultation
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/50"
            >
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section> */}
    </>
  );
}
