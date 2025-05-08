'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaRecycle, FaTruck, FaCalendar, FaCreditCard, FaFileAlt } from 'react-icons/fa';
import { SkipItem } from '../data/SkipsData';
import { fetchSkips } from '../lib/fetchSkips';
import SkipCard from './SkipCard'

export default function Skips() {
  const [skips, setSkips] = useState<SkipItem[]>([]);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  useEffect(() => {
    fetchSkips().then(setSkips);
  }, []);

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  const handleSelect = (id: number) => {
    setSelectedSkipId(id);
  };

  const steps = [
    { name: 'Postcode', icon: <FaMapMarkerAlt className="text-blue-400" /> },
    { name: 'Waste Type', icon: <FaRecycle className="text-blue-400" /> },
    { name: 'Select Skip', icon: <FaTruck className="text-blue-400" /> },
    { name: 'Permit Check', icon: <FaFileAlt className="text-gray-500" /> },
    { name: 'Choose Date', icon: <FaCalendar className="text-gray-500" /> },
    { name: 'Payment', icon: <FaCreditCard className="text-gray-500" /> },
  ];

  return (
    <main className="bg-[#121212] p-6 md:p-12 relative min-h-screen">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.name} className="flex items-center">
              <div
                className={`flex flex-col items-center ${step.name === 'Select Skip'
                    ? 'text-blue-400'
                    : step.name === 'Postcode' || step.name === 'Waste Type'
                      ? 'text-blue-400'
                      : 'text-gray-500 cursor-not-allowed'
                  }`}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-8 md:w-16 border-t-2 border-dashed border-gray-500 mx-2"></div>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-3xl md:text-2xl font-bold text-blue-100 mb-4">
          Choose Your Skip Size
        </p>
        <p className="text-lg md:text-xl text-blue-300">
          Select the skip size that best suits your needs
        </p>
      </motion.header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-items-center max-w-7xl lg:mb-8 mb-32  mx-auto w-full">
        <AnimatePresence>
          {skips.map((skip, index) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              index={index}
              onSelect={handleSelect}
              isSelected={selectedSkipId === skip.id}
            />
          ))}
        </AnimatePresence>
      </div>

      {selectedSkip && (
        <motion.footer
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="fixed bottom-0 left-0 z-40 right-0 bg-[#1a1a1a] border-t border-gray-700 p-4 flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <div className="flex justify-between md:justify-start gap-3 items-center text-white w-full text-center sm:text-left">
            <p className="text-lg font-semibold">
              {selectedSkip.size} Yard Skip
            </p>
            <div className="flex gap-2 text-right justify-end">
              <p className="text-lg text-blue-500 font-bold">
                £{selectedSkip.price_before_vat}
              </p>
              <p className="text-lg">
                {selectedSkip.hire_period_days} days
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row sm:flex-row gap-2 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkipId(null)}
              className="w-full cursor-pointer sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-xl transition-colors duration-300"
              aria-label="Go back"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log('Proceed with selected skip:', selectedSkip)}
              className="w-full cursor-pointer sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-xl transition-colors duration-300"
              aria-label="Continue with selection"
            >
              Continue
            </motion.button>
          </div>
        </motion.footer>
      )}


    </main>
  );
}