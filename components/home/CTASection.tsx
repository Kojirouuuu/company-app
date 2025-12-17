'use client';

import { Container, AnimatedSection, Button } from '@/components/ui';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />

      <Container className="relative z-10">
        <AnimatedSection className="text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>今すぐ始められます</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ビジネスの可能性を
              <br />
              <span className="gradient-text">広げましょう</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              無料トライアルで、CorpDataのすべての機能を体験できます。
              クレジットカード不要、いつでもキャンセル可能。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/companies" size="lg" className="min-w-[200px]">
                無料で始める
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                お問い合わせ
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-8">
              14日間の無料トライアル・クレジットカード不要
            </p>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
