import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Youtube,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Google Maps Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-gray-300">
              Come meet us in person or reach out online
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-500/30 h-[400px]">
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
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-amber-400">
                      Address
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      123, Event Plaza, MG Road
                      <br />
                      Your City, State - 000000
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-amber-400">
                      Phone
                    </h4>
                    <p className="text-gray-300">+91 XXXXX XXXXX</p>
                    <p className="text-gray-300">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-amber-400">
                      Email
                    </h4>
                    <p className="text-gray-300">info@annapurnaevents.com</p>
                    <p className="text-gray-300">
                      bookings@annapurnaevents.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1 rounded-full bg-white/0 backdrop-blur-sm drop-shadow-md">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
             
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional event management services for all occasions. From
              weddings to corporate events, we bring your vision to life with
              creativity and excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-amber-400 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-amber-400 transition"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-amber-400 transition"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block text-gray-300 hover:text-amber-400 transition"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-amber-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">
              Business Hours
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-amber-400">9AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-amber-400">10AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-amber-400">By Appointment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Arnapurna Events. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-amber-400 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-gray-400 hover:text-amber-400 transition"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund-policy"
                className="text-gray-400 hover:text-amber-400 transition"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
