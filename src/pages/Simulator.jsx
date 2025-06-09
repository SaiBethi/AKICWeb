import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../utils/supabaseClient';
import StockChart from '../components/StockChart';

const Simulator = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [prices, setPrices] = useState({});
  const [tradeTicker, setTradeTicker] = useState('');
  const [lookupTicker, setLookupTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('buy');
  const [loading, setLoading] = useState(true);
  const [chartSymbol, setChartSymbol] = useState(null);

  const user = JSON.parse(localStorage.getItem('akic_user'));

  useEffect(() => {
    const fetchPortfolio = async () => {
      const { data, error } = await supabase
        .from('portfolios')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (data) setPortfolio(data);
      setLoading(false);
    };
    fetchPortfolio();
  }, [user.id]);

  useEffect(() => {
    const fetchPrices = async () => {
      if (!portfolio?.holdings?.length) return;

      const priceMap = {};
      for (const h of portfolio.holdings) {
        try {
          const res = await axios.get('https://finnhub.io/api/v1/quote', {
            params: {
              symbol: h.symbol,
              token: import.meta.env.VITE_FINNHUB_API_KEY,
            },
          });
          priceMap[h.symbol] = res.data.c;
        } catch (err) {
          console.error(`Failed to fetch price for ${h.symbol}`, err);
        }
      }
      setPrices(priceMap);
    };
    fetchPrices();
  }, [portfolio]);

  const handleTrade = async () => {
    const qty = parseInt(quantity);
    if (!tradeTicker || qty <= 0) return;

    try {
      const { data } = await axios.get('https://finnhub.io/api/v1/quote', {
        params: {
          symbol: tradeTicker.toUpperCase(),
          token: import.meta.env.VITE_FINNHUB_API_KEY,
        },
      });

      const price = data.c;
      if (!price) return alert('Invalid ticker');

      const cost = qty * price;
      let updatedBalance = portfolio.balance;
      let updatedHoldings = [...portfolio.holdings];
      let updatedTrades = [...portfolio.trades];

      if (type === 'buy') {
        if (cost > updatedBalance) return alert('Insufficient funds');
        updatedBalance -= cost;
        const existing = updatedHoldings.find(h => h.symbol === tradeTicker.toUpperCase());
        if (existing) existing.quantity += qty;
        else updatedHoldings.push({ symbol: tradeTicker.toUpperCase(), quantity: qty });
      } else {
        const existing = updatedHoldings.find(h => h.symbol === tradeTicker.toUpperCase());
        if (!existing || existing.quantity < qty) return alert('Not enough shares to sell');
        existing.quantity -= qty;
        if (existing.quantity === 0) updatedHoldings = updatedHoldings.filter(h => h.symbol !== tradeTicker.toUpperCase());
        updatedBalance += cost;
      }

      updatedTrades.push({
        action: type,
        symbol: tradeTicker.toUpperCase(),
        quantity: qty,
        price,
        timestamp: new Date().toISOString(),
      });

      const { error } = await supabase
        .from('portfolios')
        .update({
          balance: updatedBalance,
          holdings: updatedHoldings,
          trades: updatedTrades,
        })
        .eq('user_id', user.id);

      if (!error) window.location.reload();
      else alert('Trade failed');
    } catch (error) {
      console.error('Trade error:', error);
      alert('Failed to execute trade.');
    }
  };

  const handleLookup = () => {
    if (lookupTicker.trim()) {
      setChartSymbol(lookupTicker.toUpperCase());
    }
  };

  if (loading) return <p className="text-center text-gray-300">Loading simulator...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <h2 className="text-4xl font-extrabold text-white text-center">📈 Investment Simulator</h2>

      <div className="bg-white/10 p-6 rounded-xl text-white">
        <h3 className="text-2xl font-bold select-none">Your Portfolio</h3>
        <p className="mt-2 select-none">Cash: ${portfolio.balance.toFixed(2)}</p>
        <p className="select-none">Net Worth: $
          {(portfolio.balance + (portfolio.holdings || []).reduce((sum, h) => sum + (prices[h.symbol] || 0) * h.quantity, 0)).toFixed(2)}
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-xl text-white">
        <h3 className="text-xl font-bold mb-2">Holdings</h3>
        {portfolio.holdings.length ? (
          portfolio.holdings.map((h, idx) => (
            <p key={idx}>
              {h.symbol} — {h.quantity} shares @ ${prices[h.symbol]?.toFixed(2) || '...'} (
              ${(h.quantity * (prices[h.symbol] || 0)).toFixed(2)})
            </p>
          ))
        ) : (
          <p className="text-gray-400 select-none">No holdings yet.</p>
        )}
      </div>

      <div className="bg-white/10 p-6 rounded-xl select-none text-white space-y-3">
        <h3 className="text-xl font-bold">Make a Trade</h3>
        <input
          placeholder="Ticker (e.g. AAPL)"
          className="select-none w-full rounded px-4 py-2 text-black"
          value={tradeTicker}
          onChange={e => setTradeTicker(e.target.value)}
        />
        <input
          placeholder="Quantity"
          type="number"
          className="select-none w-full rounded px-4 py-2 text-black"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="select-none w-full rounded px-4 py-2 text-black"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <button
          onClick={handleTrade}
          className="w-full bg-brandPurple hover:bg-brandPink text-white font-bold py-2 rounded"
        >
          Submit Trade
        </button>
      </div>

      <div className="bg-white/10 p-6 rounded-xl select-none text-white space-y-3">
        <h3 className="text-xl font-bold mb-3">📊 Stock Lookup</h3>
        <div className="flex gap-2">
          <input
            placeholder="Enter a ticker (e.g. AAPL)"
            className="select-none w-full rounded px-4 py-2 text-black"
            value={lookupTicker}
            onChange={e => setLookupTicker(e.target.value)}
          />
          <button
            onClick={handleLookup}
            className="bg-brandPurple hover:bg-brandPink text-white font-bold px-4 py-2 rounded"
          >
            Lookup
          </button>
        </div>
        {chartSymbol && <StockChart symbol={chartSymbol} />}
      </div>

      <div className="bg-white/10 p-6 rounded-xl text-white">
        <h3 className="text-xl font-bold mb-2">Trade History</h3>
        {portfolio.trades.length ? (
          portfolio.trades.map((t, i) => (
            <p className="select-none" key={i}>
              {t.timestamp.split('T')[0]} — {t.action.toUpperCase()} {t.quantity} shares of {t.symbol} @ ${t.price}
            </p>
          ))
        ) : (
          <p className="text-gray-400 select-none">No trades yet.</p>
        )}
      </div>
    </div>
  );
};

export default Simulator;
