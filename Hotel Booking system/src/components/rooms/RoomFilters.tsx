import { roomTypes, priceRanges } from '@/data/rooms';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RoomFiltersProps {
  selectedType: string;
  selectedPrice: string;
  onTypeChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

export function RoomFilters({
  selectedType,
  selectedPrice,
  onTypeChange,
  onPriceChange,
}: RoomFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 max-w-xs">
        <label className="block text-sm font-medium text-foreground mb-2">
          Room Type
        </label>
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {roomTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 max-w-xs">
        <label className="block text-sm font-medium text-foreground mb-2">
          Price Range
        </label>
        <Select value={selectedPrice} onValueChange={onPriceChange}>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Select price" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
