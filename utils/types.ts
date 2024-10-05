export type CarsCardProps = {
  id: string;
  name: string;
  tagline: string;
  images: string[];
  price: number;
  location: string;
  latitude: number;
  longitude: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};
