import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.marketaux.com/v1/news/all?symbols=AAPL,MSFT,GOOGL,TSLA,SPY&filter_entities=true&language=en&api_token=${import.meta.env.VITE_MARKETAUX_API_KEY}`
        );
        setNewsItems(response.data.data.slice(0, 10)); // top 10 articles
      } catch (err) {
        console.error('❌ Failed to fetch news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-4xl font-extrabold text-white text-center drop-shadow-lg">
        📰 Market News Feed
      </h2>
      {loading ? (
        <p className="select-none text-center text-gray-300">Loading market headlines...</p>
      ) : (
        newsItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border select-none border-white/10 rounded-xl p-6 shadow-neon transition-transform hover:scale-[1.02]"
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h3 className="select-none text-2xl font-bold text-brandPurple hover:underline">
                {item.title}
              </h3>
            </a>
            <p className="text-gray-300 mt-2 select-none">{item.description || 'No summary available.'}</p>
            <div className="mt-3 text-sm text-gray-400 italic select-none">
              {item.source || 'Unknown Source'} • {new Date(item.published_at).toLocaleString()}
            </div>
          </div>
        ))
      )}
      
    </div>
  );
};

export default News;
