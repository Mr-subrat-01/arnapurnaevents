import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Sparkles,
  Cake,
  Briefcase,
  Music,
  Home as HomeIcon,
  PartyPopper,
  Heart,
  Baby,
  CheckCircle2,
  ArrowRight,
  Star,
  Calendar,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Sparkles className="w-16 h-16" />,
      title: "Wedding Events",
      tagline: "Your Dream Wedding Awaits",
      description:
        "Create the wedding of your dreams with our comprehensive planning services. From intimate ceremonies to grand celebrations, we handle every detail to make your special day perfect and stress-free.",
      features: [
        "Complete venue selection and setup",
        "Custom decoration & themes",
        "Catering & menu planning",
        "Photography & videography coordination",
        "Entertainment & music",
        "Guest management",
        "Timeline & coordination",
        "Vendor management",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Cake className="w-16 h-16" />,
      title: "Birthday Parties",
      tagline: "Celebrate Every Milestone",
      description:
        "Make birthdays unforgettable with our creative party planning. Whether it's a child's themed party or an adult milestone celebration, we bring the fun and excitement to every age.",
      features: [
        "Themed decorations & setup",
        "Entertainment & activities",
        "Custom cake arrangements",
        "Party games & competitions",
        "Photography services",
        "Gift management",
        "Return gift coordination",
        "Venue decoration",
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: "Corporate Events",
      tagline: "Professional Excellence",
      description:
        "Elevate your business events with our professional management services. From conferences to team building activities, we ensure your corporate events leave a lasting impression.",
      features: [
        "Conference planning & execution",
        "Seminar & workshop management",
        "Team building activities",
        "Product launches",
        "Annual meetings & celebrations",
        "Networking events",
        "Audio-visual setup",
        "Professional catering",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Music className="w-16 h-16" />,
      title: "DJ Nights & Parties",
      tagline: "Dance The Night Away",
      description:
        "Turn up the energy with our high-octane DJ nights and party arrangements. Professional sound systems, stunning lighting, and experienced DJs make your party unforgettable.",
      features: [
        "Professional DJ services",
        "High-quality sound systems",
        "Dynamic lighting effects",
        "Dance floor setup",
        "Music curation & mixing",
        "Special effects",
        "Bar & beverage management",
        "Security coordination",
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <HomeIcon className="w-16 h-16" />,
      title: "House Warming Ceremonies",
      tagline: "Traditional & Meaningful",
      description:
        "Honor traditions while enjoying modern convenience. We manage all aspects of your house warming ceremony with respect for customs and attention to detail.",
      features: [
        "Traditional setup & decoration",
        "Priest coordination",
        "Pooja arrangements",
        "Catering services",
        "Guest management",
        "Photography & videography",
        "Cultural music arrangements",
        "Gift coordination",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Anniversary Celebrations",
      tagline: "Celebrate Love & Commitment",
      description:
        "Honor your journey together with romantic and memorable anniversary celebrations. From intimate dinners to grand parties, we create the perfect atmosphere.",
      features: [
        "Romantic venue decoration",
        "Customized themes",
        "Photography & videography",
        "Special catering arrangements",
        "Entertainment & music",
        "Anniversary cake",
        "Guest coordination",
        "Memory lane displays",
      ],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <PartyPopper className="w-16 h-16" />,
      title: "Engagement Ceremonies",
      tagline: "Begin Your Journey Together",
      description:
        "Mark the beginning of your journey with beautiful engagement ceremonies. We create elegant settings that bring families together in celebration.",
      features: [
        "Elegant decoration & setup",
        "Photography & videography",
        "Catering & menu planning",
        "Stage & seating arrangements",
        "Entertainment coordination",
        "Guest management",
        "Ring ceremony coordination",
        "Family coordination",
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <Baby className="w-16 h-16" />,
      title: "Baby Showers & More",
      tagline: "Celebrate New Beginnings",
      description:
        "Welcome new arrivals and celebrate special moments with charming themed events. We create joyful atmospheres for all your celebration needs.",
      features: [
        "Custom themed decoration",
        "Games & activities",
        "Catering services",
        "Photography",
        "Gift registry management",
        "Party favors",
        "Entertainment",
        "Dessert table setup",
      ],
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We discuss your vision, requirements, and budget to understand your needs perfectly.",
    },
    {
      step: "02",
      title: "Planning & Design",
      description:
        "Our team creates a customized plan with themes, vendors, and timeline for your approval.",
    },
    {
      step: "03",
      title: "Execution & Coordination",
      description:
        "We handle all logistics, coordination, and on-site management for flawless execution.",
    },
    {
      step: "04",
      title: "Perfect Delivery",
      description:
        "Enjoy your stress-free celebration while we ensure everything runs perfectly.",
    },
  ];

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
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Event
              <span className="block mt-2 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Management Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your
              vision to life with creativity, professionalism, and meticulous
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "" : "bg-white"
                } rounded-3xl p-8 md:p-12`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Service Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${service.color} text-white mb-6`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold mb-2 text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-xl text-amber-600 font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button
                        size="lg"
                        className={`bg-linear-to-r ${service.color} hover:opacity-90`}
                      >
                        Book This Service <ArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Service Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card
                      className={`overflow-hidden border-4 ${service.borderColor} shadow-2xl py-0`}
                    >
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index % 2 === 0 ? "1519167758495" : "1464366400600"
                        }-ac4416dd2d65?w=800&h=600&fit=crop`}
                        alt={service.title}
                        className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-100">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Our Simple Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From first contact to final celebration, we make event planning
              effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-amber-400"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-amber-400/20 mb-4 group-hover:text-amber-400/40 transition">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-amber-400" />
                  </div>
                )}
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
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and receive a
            customized quote
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/50"
            >
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section> */}
    </div>
  );
}
