/**
 * 半角英字を全角英字に変換する
 * @param text 変換するテキスト
 * @returns 全角英字に変換されたテキスト
 */
export function convertToFullWidth(text: string): string {
  return text.replace(/[A-Za-z]/g, (char) => {
    const code = char.charCodeAt(0);
    // 半角英字 (A-Z: 65-90, a-z: 97-122) を全角英字に変換
    if (code >= 65 && code <= 90) {
      // 大文字: A-Z -> Ａ-Ｚ (0xFF21-0xFF3A)
      return String.fromCharCode(code + 0xfee0);
    } else if (code >= 97 && code <= 122) {
      // 小文字: a-z -> ａ-ｚ (0xFF41-0xFF5A)
      return String.fromCharCode(code + 0xfee0);
    }
    return char;
  });
}
