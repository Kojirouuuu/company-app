'use client';

import { getCompanyKindName } from "@/lib/utils/company-kind";
import { useRouter } from "next/navigation";

type Company = {
    corporate_number: string;
    name: string;
    furigana: string | null;
    kind: string;
    post_code: string | null;
    prefecture_name: string | null;
    city_name: string | null;
    street_number: string | null;
    assignment_date: string;
}

export const CompanyRow = ({ company }: { company: Company }) => {
    const router = useRouter();
    const handleCompanyRowClick = () => {
        router.push(`/companies/${company.corporate_number}`);
    }
    return (
        //  onClickでクリックした時の処理を指定できる。
        <div onClick={handleCompanyRowClick} className="flex flex-col gap-2 border border-gray-200 p-4 mx-10 w-80%">
            <h1>{company.name}</h1>
            <p>{getCompanyKindName(company.kind)}</p>
            <p>{company.post_code}</p>
            <p>{company.prefecture_name}</p>
            <p>{company.city_name}</p>
            <p>{company.street_number}</p>
            <p>{company.assignment_date}</p>
        </div>
    )
}