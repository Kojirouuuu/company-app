import { getCompanyById } from "@/lib/companies";
import { getCompanyKindName } from "@/lib/utils/company-kind";

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params;
    const company = await getCompanyById(id.toString());

    if (!company) {
        return <div>企業が見つかりません</div>;
    }

    return (
        <div>
            <h1>{company.name}</h1>
            <p>{getCompanyKindName(company.kind)}</p>
            <p>{company.post_code}</p>
            <p>{company.prefecture_name}</p>
            <p>{company.city_name}</p>
            <p>{company.street_number}</p>
            <p>{company.assignment_date.toLocaleDateString('ja-JP')}</p>
        </div>
    )
}