import { getCompanyById } from "@/lib/companies";
import { getCompanyKindName } from "@/lib/utils/company-kind";
import { Container } from "@/components/ui";
import { Building2, MapPin, Calendar, Hash, Tag, ArrowLeft, Share2, Bookmark, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const company = await getCompanyById(id.toString());

    if (!company) {
        notFound();
    }

    const kindName = getCompanyKindName(company.kind);
    const address = [company.prefecture_name, company.city_name, company.street_number]
        .filter(Boolean)
        .join(' ');
    const formattedDate = company.assignment_date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const infoItems = [
        {
            icon: Hash,
            label: '法人番号',
            value: company.corporate_number,
            mono: true,
        },
        {
            icon: Tag,
            label: '企業種別',
            value: kindName,
        },
        {
            icon: MapPin,
            label: '所在地',
            value: address || '情報なし',
            subValue: company.post_code ? `〒${company.post_code}` : undefined,
        },
        {
            icon: Calendar,
            label: '指定日',
            value: formattedDate,
        },
    ];

    return (
        <div className="py-8 md:py-12">
            <Container>
                {/* Back navigation */}
                <Link
                    href="/companies"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    企業一覧に戻る
                </Link>

                {/* Header section */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs mb-3">
                                    {kindName}
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {company.name}
                                </h1>
                                {company.furigana && (
                                    <p className="text-slate-400 text-sm">{company.furigana}</p>
                                )}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3">
                            <button className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" title="保存">
                                <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" title="共有">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <a
                                href={`https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=${company.corporate_number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                国税庁で確認
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {infoItems.map((item) => (
                        <div
                            key={item.label}
                            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                                    <p className={`text-white font-medium ${item.mono ? 'font-mono' : ''}`}>
                                        {item.value}
                                    </p>
                                    {item.subValue && (
                                        <p className="text-sm text-slate-400 mt-1">{item.subValue}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional info section */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">データについて</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        この企業情報は国税庁法人番号公表サイトのデータに基づいています。
                        最新の情報については、国税庁の公式サイトをご確認ください。
                        法人番号は、株式会社、有限会社などの法人等に指定される13桁の番号です。
                    </p>
                </div>

                {/* Related companies placeholder */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold text-white mb-4">同じ地域の企業</h2>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center">
                        <p className="text-slate-500">
                            この機能は現在開発中です
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
