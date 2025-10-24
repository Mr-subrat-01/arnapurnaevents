import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  DollarSign,
  CalendarX,
  RefreshCw,
  UserCheck,
  Scale,
  AlertCircle,
  Shield,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function TermsConditionsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "services",
      title: "Services Description",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      id: "booking",
      title: "Booking & Payment",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "cancellation",
      title: "Cancellation Policy",
      icon: <CalendarX className="w-5 h-5" />,
    },
    {
      id: "postponement",
      title: "Event Postponement",
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      id: "client",
      title: "Client Responsibilities",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      id: "our",
      title: "Our Responsibilities",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "liability",
      title: "Liability",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "disputes",
      title: "Dispute Resolution",
      icon: <Scale className="w-5 h-5" />,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
              <Scale className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-purple-100 mb-4">
              Please read these terms carefully before using our services. By
              booking with us, you agree to these terms and conditions.
            </p>
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50">
              Last updated: October 24, 2025
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-purple-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-purple-900">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition text-sm text-gray-700 hover:text-purple-900"
                    >
                      {section.icon}
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-purple-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none space-y-12">
                  {/* Section 1 */}
                  <section id="acceptance" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        1. Acceptance of Terms
                      </h2>
                    </div>
                    <Card className="bg-blue-50 border-l-4 border-blue-500">
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed m-0">
                          By accessing and using the Arnapurna Events website
                          and services, you accept and agree to be bound by
                          these Terms and Conditions. If you do not agree to
                          these terms, please do not use our services.
                        </p>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 2 */}
                  <section id="services" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                        <UserCheck className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        2. Services Description
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Arnapurna Events provides event management and planning
                      services for various occasions including but not limited
                      to weddings, birthday parties, corporate events, DJ
                      nights, house warmings, and other celebrations. The
                      specific services will be detailed in your service
                      agreement.
                    </p>
                  </section>

                  {/* Section 3 - Payment Terms */}
                  <section id="booking" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-green-500 to-green-600 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        3. Booking and Payment Terms
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-green-800">
                          3.1 Booking Process
                        </h3>
                        <Card className="bg-green-50 border-2 border-green-200">
                          <CardContent className="p-6">
                            <p className="text-gray-700 m-0">
                              All bookings are subject to availability and must
                              be confirmed in writing by Arnapurna Events. A
                              signed service agreement and advance payment are
                              required to secure your booking.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3 text-green-800">
                          3.2 Payment Schedule
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              label: "Advance Payment",
                              value: "30-50% at booking",
                            },
                            {
                              label: "Balance Payment",
                              value: "7 days before event",
                            },
                            { label: "Extra Services", value: "As agreed" },
                            {
                              label: "Payment Methods",
                              value: "Bank/UPI/Card/Cash",
                            },
                          ].map((item, index) => (
                            <Card
                              key={index}
                              className="border-2 border-green-100"
                            >
                              <CardContent className="p-4">
                                <p className="text-sm text-green-700 font-semibold">
                                  {item.label}
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  {item.value}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4 - Cancellation */}
                  <section id="cancellation" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-red-500 to-red-600 p-3 rounded-lg">
                        <CalendarX className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        4. Cancellation Policy
                      </h2>
                    </div>

                    <Card className="bg-linear-to-br from-red-50 to-rose-50 border-2 border-red-200 mb-6">
                      <CardContent className="p-6">
                        <p className="text-red-900 font-semibold m-0">
                          ⚠️ Cancellations must be submitted in writing via
                          email. The cancellation date is considered as the date
                          we receive your written notice.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          days: "60+ days",
                          refund: "80% refund",
                          color: "green",
                        },
                        {
                          days: "30-59 days",
                          refund: "50% refund",
                          color: "yellow",
                        },
                        {
                          days: "15-29 days",
                          refund: "25% refund",
                          color: "orange",
                        },
                        {
                          days: "< 15 days",
                          refund: "No refund",
                          color: "red",
                        },
                      ].map((policy, index) => (
                        <Card
                          key={index}
                          className={`border-2 border-${policy.color}-200 bg-${policy.color}-50`}
                        >
                          <CardContent className="p-6 text-center">
                            <p
                              className={`text-2xl font-bold text-${policy.color}-700 mb-2`}
                            >
                              {policy.days}
                            </p>
                            <p className="text-gray-700">Before event</p>
                            <div
                              className={`mt-4 py-2 px-4 rounded-lg font-bold`}
                            >
                              {policy.refund}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Continue with other sections similar to Privacy Policy... */}
                  {/* Add sections 5-10 with similar styling */}

                  {/* Contact Section */}
                  <section id="contact" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        12. Contact Information
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-blue-50 to-sky-50 border-2 border-blue-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          For questions about these Terms & Conditions, please
                          contact:
                        </p>
                        <div className="space-y-2 text-gray-700">
                          <p className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <strong>Email:</strong> info@annapurnaevents.com
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="w-5 h-5 flex items-center justify-center text-blue-600">
                              📞
                            </span>
                            <strong>Phone:</strong> +91 XXXXX XXXXX
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card className="mt-8 border-2 border-purple-100 bg-linear-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">
                  Related Legal Documents
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/privacy-policy">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2">
                      Privacy Policy
                    </Badge>
                  </Link>
                  <Link href="/refund-policy">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white cursor-pointer px-4 py-2">
                      Refund Policy
                    </Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
