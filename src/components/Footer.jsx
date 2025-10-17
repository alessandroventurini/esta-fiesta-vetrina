import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Music, Disc } from 'lucide-react';
import { footerLinks, socialLinks } from '../data/content';
import logoSvg from '../assets/logo.svg';

const Footer = () => {
  const socialIcons = {
    Instagram: Instagram,
    Facebook: Facebook,
    TikTok: Music,
    Spotify: Disc,
  };

  return (
    <footer id="footer" className="bg-fiesta-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img 
                src={logoSvg} 
                alt="ESTA FIESTA" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Dal 2023 organizziamo eventi che uniscono food, music e socialità nei comuni bresciani.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.name];
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-fiesta-blue rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Link Utili</h4>
            <ul className="space-y-2">
              {footerLinks.utilLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collabora */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Collabora</h4>
            <ul className="space-y-2">
              {footerLinks.collaboraLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:estafiestacastelmella@gmail.com" className="hover:text-white transition-colors">
                  estafiestacastelmella@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <a href="https://instagram.com/estafiestaaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @estafiestaaa
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Facebook className="w-4 h-4 flex-shrink-0" />
                <a href="https://facebook.com/estafiestaaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  estafiestaaa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/60 mb-2">
            © 2025 ESTA FIESTA. Dal 2023.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
