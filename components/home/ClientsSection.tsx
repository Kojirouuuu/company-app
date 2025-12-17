'use client';

import { Container, AnimatedSection } from '@/components/ui';
import { motion } from 'framer-motion';

const clients = [
  { name: 'テックフロンティア株式会社', initial: 'TF' },
  { name: 'グローバルソリューションズ', initial: 'GS' },
  { name: 'イノベートコーポレーション', initial: 'IC' },
  { name: 'デジタルネクスト株式会社', initial: 'DN' },
  { name: 'フューチャーデータ株式会社', initial: 'FD' },
  { name: 'スマートビジネス株式会社', initial: 'SB' },
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-slate-800/30 border-y border-slate-700/50">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
            Trusted by leading companies
          </p>
          <h3 className="text-xl text-white font-semibold">
            多くの企業様にご利用いただいています
          </h3>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:bg-slate-800">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                  {client.initial}
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors font-medium">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
