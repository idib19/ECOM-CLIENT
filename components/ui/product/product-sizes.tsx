import React from 'react';

interface SizeSelectorProps {
    sizes: string[]; // List of available sizes
    selectedSize: string; // Currently selected size
    onSelectSize: (size: string) => void; // Callback to handle size selection
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => {
    return (
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Taille:</h3>
            <div className="flex gap-x-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`px-4 py-2 border ${size === selectedSize ? 'border-black' : 'border-gray-300'}`}
                        onClick={() => onSelectSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SizeSelector;
