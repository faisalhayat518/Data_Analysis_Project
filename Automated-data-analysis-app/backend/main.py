
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import io
import mysql.connector
from analysis_modules import run_descriptive_analysis

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-file/")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    df = pd.read_csv(io.BytesIO(content)) if file.filename.endswith(".csv") else pd.read_excel(io.BytesIO(content))
    result = run_descriptive_analysis(df)
    return JSONResponse(content=result)

@app.post("/upload-mysql/")
async def upload_mysql(
    host: str = Form(...),
    user: str = Form(...),
    password: str = Form(...),
    database: str = Form(...),
    query: str = Form(...)
):
    conn = mysql.connector.connect(host=host, user=user, password=password, database=database)
    df = pd.read_sql(query, conn)
    conn.close()
    result = run_descriptive_analysis(df)
    return JSONResponse(content=result)
