import { Container } from '@/components/ui';
import { Building2, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  product: {
    title: 'プロダクト',
    links: [
      { href: '#features', label: '機能' },
      { href: '#pricing', label: '料金' },
      { href: '/companies', label: '企業検索' },
      { href: '#api', label: 'API' },
    ],
  },
  company: {
    title: '会社情報',
    links: [
      { href: '#about', label: '会社概要' },
      { href: '#careers', label: '採用情報' },
      { href: '#news', label: 'ニュース' },
      { href: '#contact', label: 'お問い合わせ' },
    ],
  },
  support: {
    title: 'サポート',
    links: [
      { href: '#help', label: 'ヘルプセンター' },
      { href: '#docs', label: 'ドキュメント' },
      { href: '#status', label: 'システム状況' },
      { href: '#changelog', label: '更新履歴' },
    ],
  },
  legal: {
    title: '法的情報',
    links: [
      { href: '#privacy', label: 'プライバシーポリシー' },
      { href: '#terms', label: '利用規約' },
      { href: '#security', label: 'セキュリティ' },
      { href: '#compliance', label: 'コンプライアンス' },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CorpData</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              全国の企業情報を簡単に検索・分析。
              ビジネスの意思決定をサポートする
              信頼性の高いデータベースサービス。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#twitter"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
              <a href="mailto:info@corpdata.example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@corpdata.example.com
              </a>
              <a href="tel:03-1234-5678" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                03-1234-5678
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                東京都渋谷区
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} CorpData Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
