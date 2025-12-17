'use client';

import { Container, AnimatedSection, CountUp } from '@/components/ui';
import { Building2, Users, Globe, Shield } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 50000,
    suffix: '+',
    label: '登録企業数',
    description: '全国の企業情報を網羅',
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: '利用ユーザー数',
    description: 'アクティブユーザー',
  },
  {
    icon: Globe,
    value: 47,
    suffix: '',
    label: '対応都道府県',
    description: '全国をカバー',
  },
  {
    icon: Shield,
    value: 99.9,
    suffix: '%',
    label: 'システム稼働率',
    description: '安定したサービス提供',
  },
];

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Numbers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            数字で見る<span className="gradient-text">CorpData</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
