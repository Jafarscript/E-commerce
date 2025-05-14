import { Star } from "lucide-react";


const RatingStars = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
      {halfStar && <Star key="half" className="h-4 w-4 text-yellow-400" />} {/* Simplified half star */}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)}
      {reviews && <span className="ml-2 text-xs text-gray-500">({reviews})</span>}
    </div>
  );
};

export default RatingStars