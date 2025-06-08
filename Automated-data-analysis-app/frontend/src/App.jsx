
import React, { useState } from 'react';
import { uploadFile, analyzeMySQL } from './api';

function App() {
  const [file, setFile] = useState(null);
  const [mysql, setMySQL] = useState({ host: '', user: '', password: '', database: '', query: '' });
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const res = await uploadFile(file);
    setResult(res.data);
  };

  const handleMySQL = async () => {
    const formData = new FormData();
    Object.entries(mysql).forEach(([key, value]) => formData.append(key, value));
    const res = await analyzeMySQL(formData);
    setResult(res.data);
  };

  return (
    <div>
      <h1>Auto Data Analysis App</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload & Analyze File</button>

      <h2>MySQL Connection</h2>
      {Object.keys(mysql).map(key => (
        <input
          key={key}
          placeholder={key}
          value={mysql[key]}
          onChange={e => setMySQL({ ...mysql, [key]: e.target.value })}
        />
      ))}
      <button onClick={handleMySQL}>Run MySQL Analysis</button>

      <pre>{result && JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
