'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export default function MarketingFooter() {
  return (
    <footer className="bg-[#0A051B] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          {/* Column 1 Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#7C4DFF] via-[#6F3FF0] to-[#B388FF] flex items-center justify-center shadow-md">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 19V7l7 6 7-6v12" />
                  <circle cx="12" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Meetora
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Meetora automates meeting notes, transcription, and action items for teams across Zoom, Google Meet, and Microsoft Teams.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2 Product */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">Product</span>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/meetings" className="hover:text-white transition-colors">Notetaker Bot</Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors">AI Skills Store</Link></li>
              <li><Link href="/analytics" className="hover:text-white transition-colors">Conversation Intel</Link></li>
              <li><Link href="/meetings" className="hover:text-white transition-colors">Meetora AI Assistant</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3 Use Cases */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">Use Cases</span>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/meetings" className="hover:text-white transition-colors">Sales & CRM</Link></li>
              <li><Link href="/meetings" className="hover:text-white transition-colors">Recruiting</Link></li>
              <li><Link href="/meetings" className="hover:text-white transition-colors">Engineering</Link></li>
              <li><Link href="/meetings" className="hover:text-white transition-colors">Product & Design</Link></li>
              <li><Link href="/meetings" className="hover:text-white transition-colors">Venture Capital</Link></li>
            </ul>
          </div>

          {/* Column 4 Company */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">Company</span>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/request-demo" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login / Portal</Link></li>
              <li><span className="hover:text-white cursor-pointer">Security & Compliance</span></li>
              <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Meetora Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>English (US)</span>
            <span>•</span>
            <span>GDPR Ready</span>
            <span>•</span>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
