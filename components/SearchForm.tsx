'use client';

import { useRouter, useSearchParams } from 'next/navigation'; 
import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialQuery = searchParams.get('q') || '';
    const [term, setTerm] = useState(initialQuery);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // フォーム送信時のリロードを防ぐ

        if (term.trim()) {
            router.push(`/companies?q=${term.trim()}`);
        } else {
            router.push('/companies');
        }
    }

    return (
        <form onSubmit={handleSearch} className="flex align-center">
            <div className="flex align-center gap-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="法人番号や商号で検索"
                    className="w-full p-2"
                />
            </div>
        </form>
    );
}