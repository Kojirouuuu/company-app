import { getCompanies } from "@/lib/companies";
import { CompanyRow } from "@/components/CompanyRow";
import { SearchForm } from "@/components/SearchForm";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { Building2, Database, Search } from "lucide-react";

function SearchFallback() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="h-14 bg-slate-800/50 rounded-xl animate-pulse" />
        </div>
    );
}

function CompanyListSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 animate-pulse">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg" />
                        <div className="flex-1">
                            <div className="h-5 bg-slate-700 rounded w-1/3 mb-2" />
                            <div className="h-3 bg-slate-700/50 rounded w-1/4" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-7 bg-slate-700/50 rounded w-24" />
                        <div className="h-7 bg-slate-700/50 rounded w-32" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default async function CompaniesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const { q } = await searchParams;
    const companies = await getCompanies(q?.toString() || '');

    return (
        <div className="py-8 md:py-12">
            <Container>
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-4">
                        <Database className="w-4 h-4" />
                        <span>全国企業データベース</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        企業検索
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        全国の企業情報を検索できます。企業名や法人番号を入力してください。
                    </p>
                </div>

                {/* Search */}
                <div className="mb-10">
                    <Suspense fallback={<SearchFallback />}>
                        <SearchForm />
                    </Suspense>
                </div>

                {/* Results info */}
                {q && (
                    <div className="flex items-center gap-2 mb-6 text-slate-400">
                        <Search className="w-4 h-4" />
                        <span>
                            「<span className="text-white font-medium">{q}</span>」の検索結果:
                            <span className="text-blue-400 font-semibold ml-1">{companies.length}</span> 件
                        </span>
                    </div>
                )}

                {/* Company list */}
                <div className="space-y-4">
                    <Suspense fallback={<CompanyListSkeleton />}>
                        {companies.length > 0 ? (
                            companies.map((company, index) => (
                                <CompanyRow
                                    key={company.corporate_number}
                                    index={index}
                                    company={{
                                        ...company,
                                        assignment_date: company.assignment_date.toLocaleDateString('ja-JP')
                                    }}
                                />
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                                    <Building2 className="w-10 h-10 text-slate-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {q ? '企業が見つかりませんでした' : '企業を検索してください'}
                                </h3>
                                <p className="text-slate-400">
                                    {q
                                        ? '別のキーワードで検索してみてください'
                                        : '上の検索バーから企業名や法人番号を入力してください'
                                    }
                                </p>
                            </div>
                        )}
                    </Suspense>
                </div>

                {/* Results count */}
                {companies.length > 0 && (
                    <div className="mt-8 text-center text-sm text-slate-500">
                        {companies.length >= 100
                            ? '表示件数の上限に達しました。検索条件を絞り込んでください。'
                            : `${companies.length} 件の企業を表示`
                        }
                    </div>
                )}
            </Container>
        </div>
    )
}
