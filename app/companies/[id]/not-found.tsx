import { Container } from "@/components/ui";
import { Building2, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function CompanyNotFound() {
    return (
        <div className="py-16 md:py-24">
            <Container>
                <div className="max-w-md mx-auto text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-slate-800/50 rounded-full flex items-center justify-center">
                        <Building2 className="w-12 h-12 text-slate-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-4">
                        企業が見つかりません
                    </h1>

                    <p className="text-slate-400 mb-8">
                        指定された法人番号の企業情報は見つかりませんでした。
                        法人番号が正しいかご確認ください。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/companies"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                        >
                            <Search className="w-4 h-4" />
                            企業を検索する
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            ホームに戻る
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
