'use client';

import { Container, AnimatedSection, StaggerContainer, StaggerItem, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { Quote, TrendingUp, Users, Clock } from 'lucide-react';

const caseStudies = [
  {
    company: 'テックフロンティア株式会社',
    industry: '製造業',
    challenge: '新規取引先の開拓に時間がかかり、営業効率が低下していた',
    solution: 'CorpDataの高度な検索フィルターを活用し、ターゲット企業を効率的に抽出',
    results: [
      { icon: TrendingUp, value: '営業効率', improvement: '40%向上' },
      { icon: Users, value: '新規取引先', improvement: '2倍に増加' },
    ],
    quote: 'CorpDataのおかげで、これまで見落としていた潜在顧客を発見できました。',
    author: '営業部長 山田様',
  },
  {
    company: 'グローバルソリューションズ',
    industry: 'コンサルティング',
    challenge: '業界分析レポート作成に多大な時間を費やしていた',
    solution: '業界トレンドレポートとダッシュボード機能を活用し、分析作業を効率化',
    results: [
      { icon: Clock, value: 'レポート作成時間', improvement: '60%削減' },
      { icon: TrendingUp, value: '分析精度', improvement: '大幅向上' },
    ],
    quote: 'データに基づいた提案ができるようになり、クライアントの信頼度が上がりました。',
    author: 'マネージャー 佐藤様',
  },
  {
    company: 'イノベートコーポレーション',
    industry: '金融',
    challenge: '与信審査における企業情報の収集に課題があった',
    solution: 'API連携により、審査システムと企業情報DBをシームレスに統合',
    results: [
      { icon: Clock, value: '審査時間', improvement: '50%短縮' },
      { icon: Users, value: '処理件数', improvement: '3倍に増加' },
    ],
    quote: 'API連携により、審査業務が劇的に改善しました。',
    author: 'システム部門長 鈴木様',
  },
];

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">導入事例</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            様々な業界でCorpDataが選ばれています
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <StaggerItem key={study.company}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 rounded">{study.industry}</span>
                  </div>
                  <CardTitle className="text-lg">{study.company}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-1">課題</h4>
                    <p className="text-sm text-slate-400">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-1">ソリューション</h4>
                    <p className="text-sm text-slate-400">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.value} className="bg-slate-700/30 rounded-lg p-3 text-center">
                        <result.icon className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                        <div className="text-xs text-slate-400">{result.value}</div>
                        <div className="text-sm font-semibold text-white">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-slate-300 italic mb-2">{study.quote}</p>
                        <p className="text-xs text-slate-500">{study.author}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
