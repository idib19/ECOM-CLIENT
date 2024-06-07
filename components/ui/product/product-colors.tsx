import React from 'react';

interface ColorSelectorProps {
    colors: string[]; // List of available colors
    selectedColor: string; // Currently selected color
    onSelectColor: (color: string) => void; // Callback to handle color selection
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelectColor }) => {
    return (
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div className="flex gap-x-2">
                {colors.map((color) => (
                    <div
                        key={color}
                        className={`h-6 w-6 rounded-full border ${color === selectedColor ? 'border-black' : 'border-gray-600'}`}
                        style={{ backgroundColor: color }}
                        onClick={() => onSelectColor(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorSelector;
