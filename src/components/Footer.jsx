import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 xl:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-md leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-6 text-gray-200">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li
                      key={link}
                      className="text-gray-400 hover:text-white transition-colors text-md"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-gray-200">Social Links</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="blank"
                className="w-10 h-10 bg-white text-xl text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://facebook.com"
                target="blank"
                className="w-10 h-10 bg-white text-xl text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://x.com"
                target="blank"
                className="w-10 h-10 bg-white text-xl text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex md:row gap-4 justify-between items-center text-xs text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div>
            <ul className="flex gap-8">
              <li className="hover:text-white transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-white transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-white transition-colors">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
