'use client';

import { getCompanyKindName } from "@/lib/utils/company-kind";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronRight, Tag } from "lucide-react";

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

export const CompanyRow = ({ company, index = 0 }: { company: Company; index?: number }) => {
    const router = useRouter();
    const handleCompanyRowClick = () => {
        router.push(`/companies/${company.corporate_number}`);
    }

    const kindName = getCompanyKindName(company.kind);
    const address = [company.prefecture_name, company.city_name, company.street_number]
        .filter(Boolean)
        .join(' ');

    return (
        <motion.div
            onClick={handleCompanyRowClick}
            className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 cursor-pointer hover:bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -2, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.2)' }}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                                {company.name}
                            </h3>
                            {company.furigana && (
                                <p className="text-xs text-slate-500 truncate">{company.furigana}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-700/50 rounded-md">
                            <Tag className="w-3.5 h-3.5 text-blue-400" />
                            {kindName}
                        </span>
                        {address && (
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                {address}
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {company.assignment_date}
                        </span>
                    </div>
                </div>

                <div className="flex-shrink-0 self-center">
                    <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">
                    法人番号: <span className="text-slate-400 font-mono">{company.corporate_number}</span>
                </p>
            </div>
        </motion.div>
    )
}
