import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Your Health Mate",
  description: "A Doctors Appointment App, connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} `}
      >
        <main className="min-h-screen">

        {children}
        <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
  
    <div>
      <h2 class="text-2xl font-bold text-white">YourHealthMate</h2>
      <p class="mt-3 text-sm">
        Your trusted partner for easy doctor appointments and better healthcare.
      </p>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-400">Home</a></li>
        <li><a href="#" class="hover:text-blue-400">Find Doctors</a></li>
        <li><a href="#" class="hover:text-blue-400">Book Appointment</a></li>
        <li><a href="#" class="hover:text-blue-400">About Us</a></li>
        <li><a href="#" class="hover:text-blue-400">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Support</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-400">Help Center</a></li>
        <li><a href="#" class="hover:text-blue-400">FAQs</a></li>
        <li><a href="#" class="hover:text-blue-400">Terms & Conditions</a></li>
        <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Contact Us</h3>
      <p>Email: <a href="mailto:support@yourhealthmate.com" class="hover:text-blue-400">support@yourhealthmate.com</a></p>
      <p>Phone: <a href="tel:+1234567890" class="hover:text-blue-400">+1 234 567 890</a></p>
      <div class="flex space-x-4 mt-3">
        <a href="#" class="hover:text-blue-400">🌐</a>
        <a href="#" class="hover:text-blue-400">🐦</a>
        <a href="#" class="hover:text-blue-400">📘</a>
        <a href="#" class="hover:text-blue-400">📸</a>
      </div>
    </div>
  </div>


  <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
    © 2025 YourHealthMate. All rights reserved.
  </div>
</footer>

        </main>
      </body>
    </html>
  );
}
