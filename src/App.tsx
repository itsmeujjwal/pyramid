/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Calendar,
  Briefcase,
  FileText,
  CreditCard,
  Quote,
  ImageIcon
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Assets ---
const HERO_IMAGES = [
  "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/493087668_1324504639261804_4405438478846138068_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=U5Adka7cMd0Q7kNvwFrkWCu&_nc_oc=AdqhEF1fh3ptKCRLK8n7L2viHmRFdxzZUJwTyDnCr64QQWmOIYiIfJ3YpQWFOAH9OjPrcjptFHv0cHA7Zr_599Wl&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=TjTpD8UbNwab80fuiUXbAA&_nc_ss=7b289&oh=00_Af2fR25Cpsg9JmdkO7JBKN3iicIW1Psi7ss3ELwGjgZ91A&oe=69EF8FEF",
  "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/490443355_1313173697061565_3357753008657896487_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=mg6Bpvj_neoQ7kNvwHO7ai2&_nc_oc=Adqls7fFlqIGLctyd0a1qbrQhgduwaDvbwmW839WRLXqjxDctqXF2GsCEVHpT2TP2kDyAZHYyqeX5f2y6-lArqug&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=-XDS1r7FdPwq7yCXS14azg&_nc_ss=7b289&oh=00_Af38YbYYs1RgSF_KD6oM7tQj0zXQrsovdmDhaZ1O3c3zKQ&oe=69EF95F8",
  "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/492201245_1322532652792336_7578655773957073370_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6Sm2zeWXRA4Q7kNvwFciG85&_nc_oc=Adql8KFhnB7iBty3UrsgMFLwCkPv-pi5KV_GJgkeLaM71O_KsSMYs7eNirVfWoXOFYdASwZlhz89sqK67dc0DR4o&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=z9jqUgUU-17NB_jluM3UlA&_nc_ss=7b289&oh=00_Af2EgVkcGabriVQvultI716hJtlYk7U8dlrZdcrAim11xg&oe=69EF81DA"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Faculties', path: '/faculties' },
    { 
      name: 'ABOUT US', 
      path: '#',
      dropdown: [
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
      ]
    },
    { name: 'Courses', path: '/courses' },
    { name: 'Conference', path: '/conference' },
    { name: 'Publications', path: '/publications' },
    { name: 'NABIL SSE', path: '/nabil-sse' },
    { name: 'JOB', path: '/job' },
  ];

  const LOGO_URL = "/pyramid.png"; 

  return (
    <nav className="sticky top-0 z-50 bg-[#7a1b1b] border-b border-[#631515] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
               <img 
                 src={LOGO_URL} 
                 alt="Pyramid Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=HP&background=7a1b1b&color=fff';
                 }}
               />
            </div>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-black text-xl tracking-tight text-[#e6c17a]">HIMALAYAN</span>
              <span className="font-black text-xl tracking-tight text-[#e6c17a]">PYRAMID</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setAboutDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setAboutDropdownOpen(false)}
              >
                {link.dropdown ? (
                  <button
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 cursor-pointer",
                      location.pathname.startsWith('/about') || location.pathname === '/gallery' ? "text-[#f4e4bc] border-b-2 border-[#e6c17a] pb-1" : "text-white/80 hover:text-[#f4e4bc]"
                    )}
                  >
                    {link.name} <ChevronDown className={cn("w-3 h-3 transition-transform", aboutDropdownOpen && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#f4e4bc]",
                      location.pathname === link.path ? "text-[#f4e4bc] border-b-2 border-[#e6c17a] pb-1" : "text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 py-2"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-[#fcf8f1] hover:text-[#7a1b1b] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#e6c17a] text-[#7a1b1b] text-xs font-black tracking-widest hover:bg-[#f4e4bc] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            >
              APPLY NOW
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#e6c17a] hover:text-[#f4e4bc] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#7a1b1b] border-b border-[#631515] overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button 
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-bold tracking-widest text-white hover:bg-[#631515]"
                      >
                        {link.name} <ChevronDown className={cn("w-4 h-4 transition-transform", aboutDropdownOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-6 space-y-1 overflow-hidden"
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => { setIsOpen(false); setAboutDropdownOpen(false); }}
                                className="block px-3 py-3 rounded-md text-xs font-bold tracking-widest text-[#e6c17a] hover:bg-[#631515]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 rounded-md text-sm font-bold tracking-widest text-white hover:bg-[#631515] hover:text-[#e6c17a]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-xl bg-[#e6c17a] text-[#7a1b1b] font-black tracking-widest hover:bg-[#f4e4bc] mt-4 shadow-inner"
              >
                APPLY NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Slightly slower for better experience

    const overlayTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(overlayTimer);
    };
  }, []);

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden bg-slate-900">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentImage]}
            alt={`Hero ${currentImage}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* 5 Seconds Overlay Text */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="text-center px-4">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  HIMALAYAN<br />PYRAMID
                </h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-2 bg-[#e6c17a] mt-6 rounded-full shadow-[0_0_20px_rgba(230,193,122,0.5)]" 
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content (Persistent) */}
      {!showOverlay && (
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#7a1b1b]/10 backdrop-blur-md p-8 rounded-3xl border border-[#e6c17a]/20 shadow-2xl"
            >
              <span className="inline-block px-3 py-1 rounded bg-[#7a1b1b] text-[#e6c17a] text-xs font-bold uppercase tracking-widest mb-4 border border-[#e6c17a]/30">
                Premier Educational Institution
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Shaping Minds, <br />
                <span className="text-[#e6c17a]">Reaching Heights</span>
              </h2>
              <p className="text-lg text-slate-100 mb-8 max-w-lg font-medium">
                Himalayan Pyramid School provides a comprehensive curriculum that fosters creativity, critical thinking, and global awareness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="bg-[#e6c17a] hover:bg-[#f4e4bc] text-[#7a1b1b] px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 group shadow-xl">
                  Explore Courses <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/apply" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all border border-white/20">
                  Join Us Today
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentImage === i ? "w-8 bg-[#e6c17a]" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const CourseSection = () => {
  return (
    <section className="py-24 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Specialized Courses</h2>
          <p className="text-slate-600 max-w-2xl mx-auto italic font-serif">
            Empowering students with knowledge that transcends boundaries.
          </p>
        </div>

        <div className="flex justify-center">
          {/* +2 Science Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all group max-w-md w-full"
          >
            <div className="w-14 h-14 bg-[#fcf8f1] text-[#7a1b1b] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#7a1b1b] group-hover:text-[#e6c17a] transition-colors shadow-inner">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">+2 Science</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our +2 Science program is designed for students seeking excellence in medicine, engineering, and pure sciences. With advanced labs and expert faculty, we prepare you for global challenges.
            </p>
            <ul className="space-y-3 mb-8">
              {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((subject, idx) => (
                <li key={subject} className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                  <div className={cn("w-2 h-2 rounded-full", idx % 2 === 0 ? "bg-[#7a1b1b]" : "bg-[#e6c17a]")} />
                  {subject}
                </li>
              ))}
            </ul>
            <Link to="/courses" className="text-[#7a1b1b] font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:text-[#631515] group">
              View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => {
  const reasons = [
    {
      title: "World Class Faculty",
      desc: "Learn from industry experts and highly qualified academicians dedicated to student success.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Himalayan Ambience",
      desc: "A Serene and peaceful environment perfectly suited for focused academic pursuits.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Advanced Laboratories",
      desc: "State-of-the-art facilities for hands-on learning in Physics, Chemistry, and Biology.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Global Opportunities",
      desc: "Collaborations with international institutions and exposure to global academic standards.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#0a0502] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7a1b1b]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e6c17a]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Why Choosing Himalayan Pyramid is <span className="text-[#e6c17a] text-shadow-glow">The Right Choice</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              We provide more than just education; we provide a foundation for life. Our holistic approach ensures that every student graduates with confidence and competence.
            </p>
            <div className="grid gap-8">
              {reasons.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-lg",
                    i % 2 === 0 
                      ? "bg-[#7a1b1b] text-[#e6c17a] border-[#631515]" 
                      : "bg-[#e6c17a] text-[#7a1b1b] border-[#d4ac5d]"
                  )}>
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2 tracking-tight">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl skew-x-3 rotate-3 relative group border-4 border-[#7a1b1b]/30">
                <img 
                  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/670310973_1633257858386479_2789156886419844671_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JXlQ_ZLFOtcQ7kNvwH2zafh&_nc_oc=AdrSnNMWO4SX3DO-qOPfY-JvYjY5xPe0Zt8GIJLhj7-TZXuUFJ1mdcKytjzquZq0NpQ&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=b8NQOaafphbqOMLbLo9Fxw&oh=00_Af04kqIBj8nVgY8R0u7Hy2UG-3cE-Q_qzpTWjUTIX-nHPg&oe=69EFB04B" 
                  alt="Student life" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-5xl font-black text-[#e6c17a]">1000+</p>
                  <p className="text-xs opacity-80 uppercase tracking-widest font-black text-white">Success Stories</p>
                </div>
             </div>
             {/* Abstract deco */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#7a1b1b]/40 rounded-3xl -skew-x-3 -rotate-3" />
             <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-[#e6c17a]/30 rounded-3xl skew-x-3 rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadersSection = () => {
  const leaders = [
    {
      name: "Manoj Keshari",
      role: "Chairperson",
      message: "At Himalayan Pyramid, we believe in nurturing not just students, but future architects of society. Our legacy of excellence is built on the foundation of character, innovation, and global perspective.",
      image: "/sir1.jpeg"
    },
    {
      name: "Vijay Yadav",
      role: "Principal",
      message: "Education is the key to unlocking the world, a passport to freedom. We are dedicated to providing a supportive environment where every child's unique potential is recognized and celebrated.",
      image: "/sir2.jpeg"
    },
    {
      name: "Sanjay Singh",
      role: "Managing Director",
      message: "We integrate modern technology with traditional values. Our goal is to ensure that our graduates are not only academically proficient but also digitally fluent and ethically grounded.",
      image: "/sir3.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#fcf8f1] text-[#7a1b1b] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e6c17a]/30"
          >
            Visionary Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            What Our <span className="text-[#7a1b1b]">Leaders Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group relative mt-10"
            >
              <div className="absolute -top-19 left-1/2 -translate-x-1/2 w-50 h-50 bg-white rounded-3xl p-1 shadow-lg border border-slate-100 group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-2xl bg-[#fcf8f1] overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-10 text-center">
                <Quote className="w-8 h-8 text-[#e6c17a]/40 mx-auto mb-6" />
                <p className="text-slate-600 mb-8 leading-relaxed font-medium italic">
                  "{leader.message}"
                </p>
                <div className="bg-[#7a1b1b]/5 py-4 rounded-2xl border border-[#7a1b1b]/10">
                  <h4 className="font-black text-slate-900 tracking-tight">{leader.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#7a1b1b] mt-1">{leader.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#7a1b1b]/90 pt-24 pb-10 relative overflow-hidden">
      {/* Curved background shape */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: '120px' }}>
        <path
          d="M 0,40 Q 360,0 720,40 T 1440,40 L 1440,0 L 0,0 Z"
          fill="white"
          opacity="0.7"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md border border-slate-100 overflow-hidden">
                <img 
                  src="/pyramid.png" 
                  alt="Pyramid Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=HP&background=7a1b1b&color=fff';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight text-white leading-tight">HIMALAYAN</span>
                <span className="font-black text-lg tracking-tight text-[#e6c17a] leading-tight">PYRAMID</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-medium">
              Estd. 2076 B.S. — Excellence in education since decades. We are committed to nurturing the next generation of global leaders, scientists, and thinkers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-[#7a1b1b] transition-all transform hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-[#7a1b1b] transition-all transform hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-[#7a1b1b] transition-all transform hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px] border-b-2 border-[#e6c17a] inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Faculties', 'Courses', 'Apply Now'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-[#e6c17a] text-sm font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px] border-b-2 border-[#e6c17a] inline-block pb-1">Resources</h4>
            <ul className="space-y-4">
              {['Conference', 'Publications', 'NABIL SSE', 'Jobs', 'Terms'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-[#e6c17a] text-sm font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px] border-b-2 border-[#e6c17a] inline-block pb-1">Contact Us</h4>
            <ul className="space-y-6 pt-2">
              <li className="flex gap-4 text-white/80 text-sm font-medium">
                <MapPin className="w-5 h-5 text-[#e6c17a] shrink-0" />
                <span>Shreepur(Behind Nepal Telecom), Birgunj, Nepal<br /><span className="text-xs text-white/60 italic">Estd. 2076 B.S.</span></span>
              </li>
              <li className="flex gap-4 text-white/80 text-sm font-medium">
                <Phone className="w-5 h-5 text-[#e6c17a] shrink-0" />
                <span>+977 976-5887234 , +977 976-5887234</span>
              </li>
              <li className="flex gap-4 text-white/80 text-sm font-medium">
                <Mail className="w-5 h-5 text-[#e6c17a] shrink-0" />
                <span>himalayanpy150@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Himalayan Pyramid School. Registered in Nepal.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/40 text-[10px] font-black tracking-widest">
              Powered By : <span className="text-white/60">GammaSoft Pvt. Ltd</span>
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-white/60 hover:text-[#e6c17a] text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[#e6c17a] text-[10px] font-black uppercase tracking-widest transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => (
  <main>
    <Hero />
    <CourseSection />
    <ReasonsSection />
    <LeadersSection />
  </main>
);

const PlaceholderPage = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="min-h-[70vh] flex items-center justify-center py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="w-24 h-24 bg-[#7a1b1b] text-[#e6c17a] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#7a1b1b]/20 border-4 border-[#e6c17a]/30">
        <Icon className="w-12 h-12" />
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">{title}</h1>
      <p className="text-slate-600 mb-12 text-xl leading-relaxed max-w-2xl mx-auto font-medium italic">
        This section is currently under development. Himalayan Pyramid is committed to providing comprehensive information about our <span className="text-[#7a1b1b] font-black border-b-2 border-[#e6c17a]">{title.toLowerCase()}</span>. 
      </p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
          <div className="w-12 h-12 bg-[#7a1b1b]/10 text-[#7a1b1b] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7a1b1b] group-hover:text-white transition-colors">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">Ongoing Updates</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">We are adding latest curriculum and faculty details daily to ensure you have the most up-to-date information for your academic journey.</p>
        </div>
        <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
          <div className="w-12 h-12 bg-[#e6c17a]/10 text-[#7a1b1b] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e6c17a] transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">Need Help?</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">Contact our administrative office at info@himalayanpyramid.edu.np for immediate inquiries regarding the university admission process.</p>
        </div>
      </div>
      <Link to="/" className="inline-flex mt-16 px-10 py-4 bg-[#7a1b1b] text-[#e6c17a] font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#631515] transition-all shadow-xl shadow-[#7a1b1b]/20">
        Back to Home
      </Link>
    </div>
  </div>
);

// --- Root Component ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faculties" element={<PlaceholderPage title="Our Faculties" icon={Users} />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" icon={BookOpen} />} />
          <Route path="/gallery" element={<PlaceholderPage title="School Gallery" icon={ImageIcon} />} />
          <Route path="/courses" element={<PlaceholderPage title="Our Courses" icon={GraduationCap} />} />
          <Route path="/conference" element={<PlaceholderPage title="Conferences" icon={Briefcase} />} />
          <Route path="/publications" element={<PlaceholderPage title="Publications" icon={FileText} />} />
          <Route path="/nabil-sse" element={<PlaceholderPage title="NABIL SSE" icon={CreditCard} />} />
          <Route path="/job" element={<PlaceholderPage title="Job Openings" icon={Briefcase} />} />
          <Route path="/apply" element={<PlaceholderPage title="Apply Now" icon={GraduationCap} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
