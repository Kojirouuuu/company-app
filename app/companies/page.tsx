import { getCompanies } from "@/lib/companies";
import { CompanyRow } from "@/components/CompanyRow";
import { SearchForm } from "@/components/SearchForm";
import { Suspense } from "react";
export default async function CompaniesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const { q } = await searchParams;
    const companies = await getCompanies(q?.toString() || '');
    return (
        <div>
            <h1>企業一覧ページ</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchForm />
            </Suspense>
            <div className="flex flex-col gap-2">
                {companies.map((company) => (
                    // assignment_dateをclient componentでtoLocaleDateStringのように変換すると、
                    // server側とclient側で変換方法が異なるため、エラーが発生する
                    <CompanyRow 
                        key={company.corporate_number} 
                        company={{
                            ...company,
                            assignment_date: company.assignment_date.toLocaleDateString('ja-JP')
                        }} 
                    />
                ))}
            </div>
        </div>
    )
}