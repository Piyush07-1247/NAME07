import React from 'react';

function NameCard({ data }) {
  return (
    <div className="p-4 bg-white border shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-1">{data.lang} ({data.script})</h2>
      <p className="text-gray-700"><strong>Translated:</strong> {data.translatedName}</p>
      <p className="text-gray-700"><strong>Pronunciation:</strong> {data.pronunciation}</p>
      <p className="text-gray-700"><strong>Meaning:</strong> {data.meaning}</p>
    </div>
  );
}

export default NameCard;
