import React, { useEffect, useRef, useCallback } from "react";

interface QuotesModalProps {
  isOpen: boolean;
  date: string;
  temperature: string;
  quotes: string[];
  onClose: () => void;
  onAddQuote: () => void;
}

const QuotesModal: React.FC<QuotesModalProps> = ({
  isOpen,
  date,
  temperature,
  quotes,
  onClose,
  onAddQuote,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-1/4`}
      ref={modalRef}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <span className="text-white">{date}</span>
        <span className="text-white">{temperature}°</span>
        <button onClick={onClose} className="text-gray-500">
          X
        </button>
      </div>
      <div className="p-4">
        <div className="mb-4">
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={index} className="mb-2 text-white">
                {quote}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No quotes for this day.</p>
          )}
        </div>
        <button
          onClick={onAddQuote}
          className="w-full py-2 bg-green-500 text-white rounded-md"
        >
          Add New Quote
        </button>
      </div>
    </div>
  );
};

export default QuotesModal;
