import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Scale,
  Database,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "information",
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      id: "sharing",
      title: "Sharing Your Information",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      id: "security",
      title: "Data Security",
      icon: <Shield className="w-5 h-5" />,
    },
    { id: "rights", title: "Your Rights", icon: <Scale className="w-5 h-5" /> },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: <Clock className="w-5 h-5" />,
    },
    { id: "contact", title: "Contact Us", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
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
            <Card className="sticky top-24 border-2 border-blue-100">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-900">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition text-sm text-gray-700 hover:text-blue-900"
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
            <Card className="border-2 border-blue-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {/* Section 1 */}
                  <section id="introduction" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        1. Introduction
                      </h2>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Welcome to Arnapurna Events ("we," "our," or "us"). We
                        are committed to protecting your personal information
                        and your right to privacy. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your
                        information when you visit our website or use our
                        services.
                      </p>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="information" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        2. Information We Collect
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We collect personal information that you voluntarily
                      provide to us when you:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {[
                        "Fill out our contact form",
                        "Request information about our services",
                        "Book an event with us",
                        "Subscribe to our newsletter",
                        "Contact us via email or phone",
                        "Interact with our website",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Card className="bg-linear-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-amber-900 mb-3">
                          The personal information we collect may include:
                        </h4>
                        <ul className="space-y-2 text-amber-800">
                          <li>
                            • Name and contact information (email address, phone
                            number)
                          </li>
                          <li>
                            • Event details (type of event, date, location
                            preferences)
                          </li>
                          <li>
                            • Payment information (processed securely through
                            third-party processors)
                          </li>
                          <li>• Any other information you choose to provide</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 3 */}
                  <section id="usage" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-teal-500 to-teal-600 p-3 rounded-lg">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        3. How We Use Your Information
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We use the information we collect to:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Provide, operate, and maintain our services",
                        "Process your event bookings and service requests",
                        "Communicate with you about your events",
                        "Send you updates, marketing communications, and promotional materials (with your consent)",
                        "Respond to your inquiries and provide customer support",
                        "Improve our services and develop new features",
                        "Comply with legal obligations",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100"
                        >
                          <div className="bg-teal-500 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id="sharing" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-red-500 to-red-600 p-3 rounded-lg">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        4. Sharing Your Information
                      </h2>
                    </div>
                    <Card className="bg-red-50 border-2 border-red-200 mb-4">
                      <CardContent className="p-6">
                        <p className="text-red-900 font-semibold mb-2">
                          ⚠️ We do not sell, trade, or rent your personal
                          information to third parties.
                        </p>
                      </CardContent>
                    </Card>
                    <p className="text-gray-700 mb-4">
                      We may share your information with:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        Service providers who assist us in operating our
                        business (e.g., payment processors, vendors)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        Legal authorities when required by law or to protect our
                        rights
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        Event vendors and suppliers (only information necessary
                        to fulfill your event requirements)
                      </li>
                    </ul>
                  </section>

                  {/* Section 5 */}
                  <section id="security" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-green-500 to-green-600 p-3 rounded-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        5. Data Security
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed">
                          We implement appropriate technical and organizational
                          security measures to protect your personal information
                          against unauthorized access, alteration, disclosure,
                          or destruction. However, no method of transmission
                          over the internet is 100% secure, and we cannot
                          guarantee absolute security.
                        </p>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Section 6 */}
                  <section id="rights" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-amber-500 to-amber-600 p-3 rounded-lg">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        6. Your Rights
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Access and receive a copy of your personal information",
                        "Correct inaccurate or incomplete information",
                        "Request deletion of your personal information",
                        "Withdraw consent for marketing communications",
                        "Object to processing of your personal information",
                        "Data portability",
                      ].map((right, index) => (
                        <Card
                          key={index}
                          className="border-2 border-amber-100 hover:border-amber-400 transition"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="bg-amber-500 rounded-full p-1 mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-gray-700 text-sm">
                                {right}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Remaining sections with similar styling... */}
                  <section id="cookies" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        7. Cookies and Tracking
                      </h2>
                    </div>
                    <p className="text-gray-700">
                      Our website may use cookies and similar tracking
                      technologies to enhance your browsing experience. You can
                      control cookies through your browser settings.
                    </p>
                  </section>

                  <section id="children" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-pink-500 to-pink-600 p-3 rounded-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        8. Children's Privacy
                      </h2>
                    </div>
                    <p className="text-gray-700">
                      Our services are not directed to children under 13 years
                      of age. We do not knowingly collect personal information
                      from children under 13.
                    </p>
                  </section>

                  <section id="changes" className="mb-12 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-cyan-500 to-cyan-600 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        9. Changes to This Policy
                      </h2>
                    </div>
                    <p className="text-gray-700">
                      We may update this Privacy Policy from time to time. The
                      updated version will be indicated by an updated "Last
                      updated" date at the top of this page.
                    </p>
                  </section>

                  <section id="contact" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 m-0">
                        10. Contact Us
                      </h2>
                    </div>
                    <Card className="bg-linear-to-br from-blue-50 to-sky-50 border-2 border-blue-200">
                      <CardContent className="p-6">
                        <p className="text-gray-700 mb-4">
                          If you have any questions about this Privacy Policy,
                          please contact us at:
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
                          <p className="flex items-start gap-2">
                            <span className="w-5 h-5 flex items-center justify-center text-blue-600 mt-1">
                              📍
                            </span>
                            <span>
                              <strong>Address:</strong> Your Address, City,
                              State, India
                            </span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <Card className="mt-8 border-2 border-blue-100 bg-linear-to-br from-blue-50 to-sky-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">
                  Related Legal Documents
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/terms-conditions">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2">
                      Terms & Conditions
                    </Badge>
                  </Link>
                  <Link href="/refund-policy">
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-4 py-2">
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
