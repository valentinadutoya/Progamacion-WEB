import React, { useState, useEffect } from 'react';
import './index.css';

const CurrencyConverter = () => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/55269cbbef0a65cc70f93752/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                setExchangeRate(data.conversion_rates);
            })
            .catch(error => console.error('Error fetching exchange rates:', error));
    }, [fromCurrency]);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const convertCurrency = () => {
        if (exchangeRate && exchangeRate[toCurrency]) {
            const rate = exchangeRate[toCurrency];
            const result = amount * rate;
            setConvertedAmount(result.toFixed(2));
        }
    };

    useEffect(() => {
        convertCurrency();
    }, [amount, exchangeRate, toCurrency]);

    return (
        <div className="currency-converter">
            <h2>Conversor de Monedas</h2>
            <div className="converter-form">
                <input type="number" value={amount} onChange={handleAmountChange} />
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    {exchangeRate && Object.keys(exchangeRate).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <span className="equals">=</span>
                <input type="text" value={convertedAmount || ''} readOnly />
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    {exchangeRate && Object.keys(exchangeRate).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CurrencyConverter;