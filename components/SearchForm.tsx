'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function SearchForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialQuery = searchParams.get('q') || '';
    const [term, setTerm] = useState(initialQuery);
    const [isFocused, setIsFocused] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (term.trim()) {
            router.push(`/companies?q=${term.trim()}`);
        } else {
            router.push('/companies');
        }
    }

    const handleClear = () => {
        setTerm('');
        router.push('/companies');
    }

    return (
        <motion.form
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className={`
                    relative flex items-center gap-3
                    bg-slate-800/50 backdrop-blur-sm
                    border rounded-xl px-4 py-3
                    transition-all duration-300
                    ${isFocused
                        ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                        : 'border-slate-700 hover:border-slate-600'
                    }
                `}
            >
                <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-blue-400' : 'text-slate-500'}`} />
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="企業名、法人番号で検索..."
                    className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 border-0 focus:border-0 text-base"
                    style={{ outline: 'none', border: 'none' }}
                />
                {term && (
                    <motion.button
                        type="button"
                        onClick={handleClear}
                        className="p-1 text-slate-500 hover:text-white transition-colors"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <X className="w-4 h-4" />
                    </motion.button>
                )}
                <motion.button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    検索
                </motion.button>
            </div>
            <p className="text-slate-500 text-sm mt-2 text-center">
                企業名の一部や法人番号を入力してください
            </p>
        </motion.form>
    );
}
