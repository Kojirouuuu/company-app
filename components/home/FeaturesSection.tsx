'use client';

import { Container, AnimatedSection, StaggerContainer, StaggerItem, Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { Search, BarChart3, FileText, Code2 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: '高度な検索フィルター',
    description: '業種、所在地、設立年、資本金など多彩な条件で絞り込み。複合条件検索でピンポイントに企業を発見。',
  },
  {
    icon: BarChart3,
    title: '企業分析ダッシュボード',
    description: '企業の財務データや成長トレンドをビジュアライズ。競合比較や業界ポジションを一目で把握。',
  },
  {
    icon: FileText,
    title: '業界トレンドレポート',
    description: '業界別の市場動向、新規参入企業、M&A情報など。データに基づく戦略立案をサポート。',
  },
  {
    icon: Code2,
    title: 'API連携',
    description: 'RESTful APIで自社システムと簡単連携。リアルタイムデータ取得でワークフローを自動化。',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ビジネスを加速する<span className="gradient-text">4つの機能</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            企業情報の検索から分析まで、必要な機能をすべて備えた
            オールインワンプラットフォーム
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
