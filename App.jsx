import { useState } from 'react';
function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-900 font-sans">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">mag: Search Project</h1>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type your words or phrases..."
          className="w-full p-3 border rounded shadow"
        />
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h2 className="font-semibold mb-2">Project Description</h2>
          <p>This project allows users to enter a word or phrase in a search box. The entered value updates live below.</p>
          <p className="mt-2 text-blue-700">:mag_right: You searched: <strong>{query}</strong></p>
        </div>
      </div>
    </div>
  );
}
export default App;