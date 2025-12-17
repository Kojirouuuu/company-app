// 企業種別コードのマッピング
// 参考文献: https://www.houjin-bangou.nta.go.jp/pc/download/images/k-resource-dl.pdf

export const COMPANY_KIND_MAPPING: { [key: string]: string } = {
  "101": "国の機関",
  "201": "地方公共団体",
  "301": "株式会社",
  "302": "有限会社",
  "303": "合名会社",
  "304": "合資会社",
  "305": "合同会社",
  "399": "その他の設立登記法人",
  "401": "外国会社等",
  "499": "その他",
};

/**
 * 企業種別コードを日本語名に変換する
 * @param code 企業種別コード
 * @returns 企業種別名（見つからない場合は元のコードを返す）
 */
export function getCompanyKindName(code: string): string {
  return COMPANY_KIND_MAPPING[code] || code;
}
