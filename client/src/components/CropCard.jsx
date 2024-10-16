import { HiOutlineUserGroup } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import { useState } from 'react';

export default function CropCard({ crop, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(crop.quantity);

  const handleIncreaseQuantity = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(crop._id, newQuantity); // Notify parent component
  };

  const handleDecreaseQuantity = async () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(crop._id, newQuantity); // Notify parent component
    }
  };

  return (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 w-full md:w-72 rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-gray-500 text-md uppercase">{crop.name}</h3>
          <p className="text-2xl">{quantity} Kg</p>
        </div>
        <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
      </div>
      <p className="text-gray-500">Price per Kg: ₹{crop.pricePerKg}</p>
      <p className="text-gray-500">Category: {crop.type}</p>

      {/* Buttons for increasing and decreasing quantity */}
      <div className="flex justify-between gap-2">
        <Button color="gray" onClick={handleDecreaseQuantity} disabled={quantity === 0}>
          -
        </Button>
        <Button color="gray" onClick={handleIncreaseQuantity}>
          +
        </Button>
      </div>
    </div>
  );
}
