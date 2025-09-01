import React, { useState, useEffect } from 'react';
import { calculateMortgage } from '../utils/mortgage';

const Mortgage = ({ translations }) => {
  const [formData, setFormData] = useState({
    propertyPrice: 1500000,
    downPayment: 450000,
    years: 30,
    interestType: 'fixed',
    fixedRate: 2.4,
    euribor: 0.5,
    margin: 3.4
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const newResults = calculateMortgage(formData);
    setResults(newResults);
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="mortgage" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {translations.mortgage.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Property Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.mortgage.price}
              </label>
              <input
                type="number"
                value={formData.propertyPrice}
                onChange={(e) => handleInputChange('propertyPrice', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min="0"
                step="1000"
              />
              <input
                type="range"
                min="500000"
                max="3000000"
                step="50000"
                value={formData.propertyPrice}
                onChange={(e) => handleInputChange('propertyPrice', parseInt(e.target.value))}
                className="w-full mt-2 accent-yellow-500"
              />
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.mortgage.down_payment}
              </label>
              <input
                type="number"
                value={formData.downPayment}
                onChange={(e) => handleInputChange('downPayment', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min="0"
                step="1000"
                max={formData.propertyPrice}
              />
              <input
                type="range"
                min="0"
                max={formData.propertyPrice}
                step="10000"
                value={formData.downPayment}
                onChange={(e) => handleInputChange('downPayment', parseInt(e.target.value))}
                className="w-full mt-2 accent-yellow-500"
              />
            </div>

            {/* Years */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.mortgage.years}
              </label>
              <input
                type="number"
                value={formData.years}
                onChange={(e) => handleInputChange('years', parseInt(e.target.value) || 1)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min="1"
                max="40"
              />
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={formData.years}
                onChange={(e) => handleInputChange('years', parseInt(e.target.value))}
                className="w-full mt-2 accent-yellow-500"
              />
            </div>

            {/* Interest Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.mortgage.interest_type}
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="interestType"
                    value="fixed"
                    checked={formData.interestType === 'fixed'}
                    onChange={(e) => handleInputChange('interestType', e.target.value)}
                    className="mr-2 text-yellow-500 focus:ring-yellow-500"
                  />
                  {translations.mortgage.fixed}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="interestType"
                    value="variable"
                    checked={formData.interestType === 'variable'}
                    onChange={(e) => handleInputChange('interestType', e.target.value)}
                    className="mr-2 text-yellow-500 focus:ring-yellow-500"
                  />
                  {translations.mortgage.variable}
                </label>
              </div>
            </div>

            {/* Interest Rate */}
            {formData.interestType === 'fixed' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.mortgage.interest_rate}
                </label>
                <input
                  type="number"
                  value={formData.fixedRate}
                  onChange={(e) => handleInputChange('fixedRate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.mortgage.euribor}
                  </label>
                  <input
                    type="number"
                    value={formData.euribor}
                    onChange={(e) => handleInputChange('euribor', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    min="-1"
                    max="5"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.mortgage.margin}
                  </label>
                  <input
                    type="number"
                    value={formData.margin}
                    onChange={(e) => handleInputChange('margin', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    min="0"
                    max="10"
                    step="0.1"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              {translations.mortgage.results}
            </h3>

            {results && (
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{translations.mortgage.estimated_costs}</span>
                  <span className="font-bold text-lg text-red-600">
                    {formatCurrency(results.estimatedCosts)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{translations.mortgage.loan_amount}</span>
                  <span className="font-bold text-lg text-blue-600">
                    {formatCurrency(results.loanAmount)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{translations.mortgage.monthly_payment}</span>
                  <span className="font-bold text-xl text-green-600">
                    {formatCurrency(results.monthlyPayment)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">{translations.mortgage.total_payment}</span>
                  <span className="font-bold text-lg text-gray-700">
                    {formatCurrency(results.totalPayment)}
                  </span>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-600 text-center">
                    {translations.mortgage.applied_rate}: {results.interestRate.toFixed(2)}%
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mortgage;