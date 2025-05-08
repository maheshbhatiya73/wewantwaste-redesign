import { SkipItem } from "../data/SkipsData";
import Image from 'next/image';
import skipimg from '../../../public/skip.jpg';
import { motion } from "framer-motion"
import { FaArrowRight, FaCheckCircle, FaClock, FaMoneyBillWave, FaTrash } from "react-icons/fa";

interface Props {
  skip: SkipItem;
  onSelect: (id: number) => void;
  index: number;
  isSelected: boolean;
}
const  SkipCard = ({ skip, onSelect, index, isSelected }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onSelect(skip.id)}
      className={`relative bg-[#1a1a1a] rounded-2xl border ${isSelected ? 'border-blue-500 shadow-xl shadow-blue-500/50' : 'border-gray-700'
        } hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/30 p-6 flex flex-col justify-between max-w-sm w-full group cursor-pointer`}
      role="region"
      aria-labelledby={`skip-card-${skip.id}`}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="absolute top-4 left-4 z-10 text-blue-500"
        >
          <FaCheckCircle size={24} aria-hidden="true" />
        </motion.div>
      )}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
        className="absolute top-4 right-4 z-10 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md"
      >
        {skip.size} Yard
      </motion.div>
      <div>
        <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 flex justify-center items-center">
          <Image
            src={skipimg}
            alt={`${skip.size} yard skip`}
            width={300}
            height={192}
            objectFit="cover"
            className="rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <h2
          id={`skip-card-${skip.id}`}
          className="text-xl font-semibold text-blue-100 mb-3 flex items-center"
        >
          <FaTrash className="mr-2 text-blue-400" aria-hidden="true" />
          {skip.size} Yard Skip
        </h2>
        <div className="space-y-3 text-sm text-blue-200">
          <p className="flex items-center">
            <FaClock className="mr-2 text-blue-400" aria-hidden="true" />
            {skip.hire_period_days} day hire period
          </p>
          <p className="flex items-center">
            <FaMoneyBillWave className="mr-2 text-blue-400" aria-hidden="true" />
            £ {skip.price_before_vat}
          </p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(skip.id)}
        className={`mt-6 cursor-pointer ${isSelected ? 'bg-blue-700 cursor-pointer hover:bg-blue-800' : 'bg-[#2A2A2A] hover:bg-gray-800'
          } text-white font-medium px-6 py-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2`}
        aria-label={isSelected ? `Selected ${skip.size} yard skip` : `Select ${skip.size} yard skip`}
      >
        {isSelected ? (
          <>
            Selected
          </>
        ) : (
          <>
            Select this skip
            <FaArrowRight className="ml-2" aria-hidden="true" />
          </>
        )}
      </motion.button>
    </motion.article>
  );
};

export default SkipCard