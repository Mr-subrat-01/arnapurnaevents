import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our event planners",
      details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get a response within 24 hours",
      details: ["info@annapurnaevents.com", "bookings@annapurnaevents.com"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come to our office for consultation",
      details: ["123, Event Plaza, MG Road", "Your City, State - 000000"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      description: "We're available most of the week",
      details: ["Mon-Fri: 9AM - 8PM", "Sat: 10AM - 6PM"],
      color: "from-amber-500 to-amber-600",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking 3-6 months in advance for weddings and 1-3 months for other events.",
    },
    {
      question: "Do you provide customized packages?",
      answer:
        "Yes! Every event is unique, and we customize our services to match your specific requirements.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve [Your City] and surrounding areas. Contact us for events in other locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/50">
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Plan Your
            <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Perfect Event
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or ready to book? We're here to help make your
            celebration unforgettable. Reach out through any method below.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20 mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${method.color} text-white mb-4`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-blue-900 font-medium text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              <Card className="border-2 border-blue-100 shadow-xl">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="mt-6 bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500 p-2 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2">
                        💡 Quick Response Tip
                      </h3>
                      <p className="text-amber-800 text-sm">
                        For faster responses, mention your preferred event date,
                        location, and approximate guest count in your message.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Map & FAQs */}
            <div className="space-y-8">
              {/* Google Map */}
              <Card className="border-2 border-blue-100 overflow-hidden shadow-xl py-0">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Find Us Here
                  </h3>
                  <p className="text-blue-100 mt-2">
                    Visit our office for in-person consultation
                  </p>
                </div>
                {/* <div className="h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121813214429!2d73.87373287495659!3d18.563892982542426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arnapurna Events Location"
                  ></iframe>
                </div> */}
              </Card>

              {/* FAQs */}
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-amber-400 pl-4"
                      >
                        <h4 className="font-bold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Appointment CTA */}
              <Card className="bg-linear-to-br from-blue-900 to-blue-700 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                  <h3 className="text-2xl font-bold mb-2">
                    Book a Consultation
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Schedule a free consultation to discuss your event in detail
                  </p>
                  <a href="tel:+91XXXXXXXXXX">
                    <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-lg transition">
                      Call to Book Now
                    </button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
