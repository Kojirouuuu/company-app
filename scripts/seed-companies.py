import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine

from pathlib import Path
import os

# 国税庁の全件データをpandasのデータフレームとして整形
# カラム名を人間が見やすく設定する
names = [
    "連番号",
    "法人番号",
    "処理区分",
    "訂正区分",
    "更新年月日",
    "変更年月日",
    "商号",
    "商号又はイメージID",
    "法人種別",
    "国内所在地(都道府県)",
    "国内所在地(市区町村)",
    "国内所在地(丁目番地等)",
    "国内所在地イメージID",
    "都道府県コード",
    "市区町村コード",
    "郵便番号",
    "国外所在地",
    "国外所在地イメージID",
    "登記記録の閉鎖年月日",
    "登記記録の閉鎖などの事由",
    "承継先法人番号",
    "変更事由の詳細",
    "法人番号指定年月日",
    "最新履歴",
    "商号又は名称(英語表記)",
    "国内所在地(都道府県)(英語表記)",
    "国内所在地(市区町村丁目番地等)(英語表記)",
    "国外所在地(英語表記)",
    "フリガナ",
    "検索対象外"
]

# 環境変数を読み込む
# .env.exampleを参考に.envを作成しよう！
load_dotenv()

engine = os.getenv("DATABASE_URL")

# prismaが勝手に作成するDATABASE_URLには?schemaが語尾につくので、念の為削除
if "?" in engine:
    engine = engine.split("?")[0]

# SQLAlchemyのEngineを作成
engine = create_engine(engine)

print(f"Let's set up Postgres database: {engine}")

# 適宜parentを付ける
p = Path.cwd()
# p = Path.cwd().parent
dir = os.path.join(p, "data/kokuzei")

file = os.path.join(dir, "insert.csv")

print(f"Roading the file ...  {file}")

# 必要なカラムのみを読み込む（メモリ効率のため）
insert_names = [
    "法人番号",
    "商号",
    "フリガナ",
    "法人種別",
    "郵便番号",
    "国内所在地(都道府県)",
    "国内所在地(市区町村)",
    "国内所在地(丁目番地等)",
    "法人番号指定年月日"
]

# TODO: prismaの設定に合わせて、companiesのカラムを追加する
column_mapping = {
    "法人番号": "corporate_number",
    "商号": "name",
    "フリガナ": "furigana",
    "法人種別": "kind",
    "郵便番号": "post_code",
    "国内所在地(都道府県)": "prefecture_name",
    "国内所在地(市区町村)": "city_name",
    "国内所在地(丁目番地等)": "street_number",
    "法人番号指定年月日": "assignment_date",
}

# チャンクサイズを設定（メモリ効率のため）
CHUNK_SIZE = 10000  # 一度に読み込む行数

print(f"Processing file in chunks of {CHUNK_SIZE} rows...")

total_rows = 0
chunk_count = 0

try:
    # チャンクごとに読み込んで処理
    for chunk in pd.read_csv(
        file, 
        names=names, 
        dtype={"郵便番号": str},
        usecols=insert_names,
        chunksize=CHUNK_SIZE,
        low_memory=False
    ):
        chunk_count += 1
        
        # カラム名をマッピング
        chunk.rename(columns=column_mapping, inplace=True)
        
        # 日付の変換
        chunk["assignment_date"] = pd.to_datetime(chunk["assignment_date"])
        
        # データベースに書き込み
        chunk.to_sql('companies', engine, if_exists='append', index=False, chunksize=1000)
        
        total_rows += len(chunk)
        
        # 進捗表示（100チャンクごと）
        if chunk_count % 100 == 0:
            print(f"Processed {chunk_count} chunks, {total_rows:,} rows inserted...")
    
    print(f"Successfully saved to database!")
    print(f"Total: {chunk_count} chunks, {total_rows:,} rows inserted")
    
except Exception as e:
    print(f"Error: {e}")
    print(f"Processed {chunk_count} chunks, {total_rows:,} rows before error")
    raise

