
def run_descriptive_analysis(df):
    result = {
        "summary": df.describe().to_dict(),
        "missing": df.isnull().sum().to_dict(),
        "skew": df.skew(numeric_only=True).to_dict(),
        "kurtosis": df.kurtosis(numeric_only=True).to_dict()
    }
    return result
