import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Calendar,
  Clock,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
  const refundTimeline = [
    {
      period: "60+ Days",
      refund: "80%",
      deduction: "20%",
      reason: "Administrative costs",
      icon: <CheckCircle2 className="w-8 h-8" />,
      cardClass:
        "border-4 border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-100",
      iconClass: "bg-emerald-500",
      refundClass: "bg-emerald-600",
    },
    {
      period: "30-59 Days",
      refund: "50%",
      deduction: "50%",
      reason: "Vendor commitments",
      icon: <AlertCircle className="w-8 h-8" />,
      cardClass:
        "border-4 border-amber-200 bg-linear-to-br from-amber-50 to-amber-100",
      iconClass: "bg-amber-500",
      refundClass: "bg-amber-600",
    },
    {
      period: "15-29 Days",
      refund: "25%",
      deduction: "75%",
      reason: "Non-refundable vendor costs",
      icon: <AlertCircle className="w-8 h-8" />,
      cardClass:
        "border-4 border-orange-200 bg-linear-to-br from-orange-50 to-orange-100",
      iconClass: "bg-orange-500",
      refundClass: "bg-orange-600",
    },
    {
      period: "< 15 Days",
      refund: "0%",
      deduction: "100%",
      reason: "All costs finalized",
      icon: <XCircle className="w-8 h-8" />,
      cardClass:
        "border-4 border-red-200 bg-linear-to-br from-red-50 to-red-100",
      iconClass: "bg-red-500",
      refundClass: "bg-red-600",
    },
  ];

  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "advance",
      title: "Advance Payment",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "timeline",
      title: "Cancellation Timeline",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "process",
      title: "Cancellation Process",
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      id: "postponement",
      title: "Event Postponement",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: "partial",
      title: "Partial Cancellations",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "force",
      title: "Force Majeure",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      id: "refund-method",
      title: "Refund Method",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Items",
      icon: <XCircle className="w-5 h-5" />,
    },
    { id: "contact", title: "Contact Us", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
              <DollarSign className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-emerald-100 mb-4">
              We understand plans change. This policy outlines our terms for
              cancellations and refunds to ensure transparency and fairness for
              all parties.
            </p>
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50">
              Last updated: October 24, 2025
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-green-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-green-900">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition text-sm text-gray-700 hover:text-green-900"
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
            {/* Refund Timeline Visualization */}
            <Card className="border-2 border-green-100 shadow-2xl mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-green-900 to-emerald-700 bg-clip-text text-transparent">
                  Cancellation Timeline & Refunds
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {refundTimeline.map((item, index) => (
                    <Card
                      key={index}
                      className={`${item.cardClass} hover:shadow-2xl transition-all`}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.iconClass} text-white mb-4`}
                        >
                          {item.icon}
                        </div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">
                          {item.period}
                        </h5>
                        <p className="text-sm text-gray-600 mb-4">
                          Before Event
                        </p>
                        <div
                          className={`py-3 px-4 ${item.refundClass} text-white rounded-lg font-bold text-sm mb-3`}
                        >
                          {item.refund} Refund
                        </div>
                        <p className="text-sm text-gray-700">
                          <strong>Deduction:</strong> {item.deduction}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          {item.reason}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Content Sections */}
            <Card className="border-2 border-green-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none space-y-12">
                  {/* Section 1: Overview */}
                  <section id="overview" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        1. Overview
                      </h2>
                    </div>
                    <Card className="bg-blue-50 border-l-4 border-blue-500">
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed m-0">
                          At Arnapurna Events, we understand that plans can
                          change. This Refund and Cancellation Policy outlines
                          our terms for cancellations and refunds. Please read
                          this policy carefully before booking our services.
                        </p>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 2: Advance Payment */}
                  <section id="advance" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-green-500 to-green-600 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        2. Advance Payment
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed m-0">
                          All event bookings require an advance payment of{" "}
                          <strong>30-50%</strong> of the total service cost.
                          This advance payment secures your event date and
                          allows us to begin planning and coordination with
                          vendors.
                        </p>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 3: Cancellation Process */}
                  <section id="process" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        3. Cancellation Process
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      To cancel your event booking, please follow these steps:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Submit cancellation request in writing via email to info@annapurnaevents.com",
                        "Include your booking reference number and event details",
                        "We will acknowledge receipt within 24-48 hours",
                        "Refund processing begins after written confirmation",
                        "Refund will be credited to the original payment method",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100"
                        >
                          <div className="bg-purple-500 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 4: Event Postponement */}
                  <section id="postponement" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-amber-500 to-amber-600 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        4. Event Postponement
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      If you need to postpone your event rather than cancel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Notify us at least 30 days in advance",
                        "One free postponement allowed within 12 months",
                        "Your advance payment transfers to new date",
                        "Subject to availability of services and vendors",
                      ].map((item, index) => (
                        <Card
                          key={index}
                          className="border-2 border-amber-100 hover:border-amber-400 transition"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">
                                {item}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Section 5: Partial Cancellations */}
                  <section id="partial" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-teal-500 to-teal-600 p-3 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        5. Partial Cancellations
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      If you wish to reduce services after booking (e.g., reduce
                      guest count, remove specific services):
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        Requests must be made at least 14 days before the event
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        Refunds are subject to vendor cancellation policies
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 font-bold">•</span>A 15%
                        administrative fee applies to partial refunds
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        Some vendor costs may be non-refundable
                      </li>
                    </ul>
                  </section>

                  {/* Section 6: Force Majeure */}
                  <section id="force" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-red-500 to-red-600 p-3 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        6. Force Majeure
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-red-50 to-rose-50 border-2 border-red-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          In case of force majeure events (natural disasters,
                          government restrictions, pandemic lockdowns, etc.):
                        </p>
                        <div className="space-y-2 text-gray-700">
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            Full advance payment will be held as credit
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            Event can be rescheduled within 18 months
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            Refund of 75% available if rescheduling is not
                            possible
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            We will work with you to find the best solution
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 7: Refund Method */}
                  <section id="refund-method" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        7. Payment Refund Method
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      All refunds will be processed to the original payment
                      method used for booking:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border-2 border-indigo-100 bg-indigo-50">
                        <CardContent className="p-6 text-center">
                          <p className="font-bold text-indigo-900 mb-2">
                            Bank Transfer
                          </p>
                          <p className="text-2xl font-bold text-indigo-600 mb-1">
                            10-15
                          </p>
                          <p className="text-sm text-gray-600">Business Days</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-purple-100 bg-purple-50">
                        <CardContent className="p-6 text-center">
                          <p className="font-bold text-purple-900 mb-2">
                            Credit/Debit Card
                          </p>
                          <p className="text-2xl font-bold text-purple-600 mb-1">
                            15-20
                          </p>
                          <p className="text-sm text-gray-600">Business Days</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-pink-100 bg-pink-50">
                        <CardContent className="p-6 text-center">
                          <p className="font-bold text-pink-900 mb-2">UPI</p>
                          <p className="text-2xl font-bold text-pink-600 mb-1">
                            5-7
                          </p>
                          <p className="text-sm text-gray-600">Business Days</p>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Section 8: Non-Refundable Items */}
                  <section id="non-refundable" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                        <XCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        8. Non-Refundable Items
                      </h2>
                    </div>
                    <Card className="bg-orange-50 border-2 border-orange-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4 font-semibold">
                          The following are typically non-refundable once
                          committed:
                        </p>
                        <div className="space-y-2 text-gray-700">
                          <p className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            Custom-made items (printed materials, custom
                            decorations)
                          </p>
                          <p className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            Venue booking fees paid to third parties
                          </p>
                          <p className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            Vendor advance payments already disbursed
                          </p>
                          <p className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            Permits and licenses obtained for your event
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 9: Contact */}
                  <section id="contact" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        9. Questions & Support
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-blue-50 to-sky-50 border-2 border-blue-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          If you have questions about our refund policy or need
                          to discuss your specific situation:
                        </p>
                        <div className="space-y-3 text-gray-700">
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
                          <p className="text-blue-900 font-semibold mt-4">
                            We are here to help and will work with you to find
                            the best solution.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card className="mt-8 border-2 border-green-100 bg-linear-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">
                  Related Legal Documents
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/privacy-policy">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2">
                      Privacy Policy <ArrowRight className="w-4 h-4 ml-2" />
                    </Badge>
                  </Link>
                  <Link href="/terms-conditions">
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-4 py-2">
                      Terms & Conditions <ArrowRight className="w-4 h-4 ml-2" />
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
