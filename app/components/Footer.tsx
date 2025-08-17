import React from "react";

// Define a estrutura para um link
interface Link {
  href: string;
  text: string;
}

// Define a estrutura para um ícone de rede social
interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Define as props que o componente Footer irá receber
interface FooterProps {
  aboutText: string;
  usefulLinks: Link[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks: SocialLink[];
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
  aboutText,
  usefulLinks,
  contactInfo,
  socialLinks,
  copyrightText,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* <!-- About Us --> */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            About Us
          </h3>
          <p className="text-gray-500 dark:text-gray-400">{aboutText}</p>
        </div>

        {/* <!-- Useful Links --> */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            Useful Links
          </h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:underline text-blue-600 dark:text-blue-400"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Contact --> */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            Contact
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Email: {contactInfo.email}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Phone: {contactInfo.phone}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Address: {contactInfo.address}
          </p>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="hover:opacity-80"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-center">
        <p>
          &copy; {currentYear} {copyrightText}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
