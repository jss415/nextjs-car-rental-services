// Temporary

// cities.ts
export const cities: { [key: string]: { lat: number; long: number } } = {
  "Los Angeles, CA": { lat: 34.0522, long: -118.2437 },
  "New York, NY": { lat: 40.7128, long: -74.006 },
  "San Francisco, CA": { lat: 37.7749, long: -122.4194 },
  "Chicago, IL": { lat: 41.8781, long: -87.6298 },
  "Houston, TX": { lat: 29.7604, long: -95.3698 },
  "Miami, FL": { lat: 25.7617, long: -80.1918 },
  "Dallas, TX": { lat: 32.7767, long: -96.797 },
  "Atlanta, GA": { lat: 33.749, long: -84.388 },
  "Denver, CO": { lat: 39.7392, long: -104.9903 },
  "Seattle, WA": { lat: 47.6062, long: -122.3321 },
  "Austin, TX": { lat: 30.2672, long: -97.7431 },
  "Boston, MA": { lat: 42.3601, long: -71.0589 },
  "Phoenix, AZ": { lat: 33.4484, long: -112.074 },
  "Philadelphia, PA": { lat: 39.9526, long: -75.1652 },
  "San Diego, CA": { lat: 32.7157, long: -117.1611 },
  "Orlando, FL": { lat: 28.5383, long: -81.3792 },
  "Las Vegas, NV": { lat: 36.1699, long: -115.1398 },
  "Portland, OR": { lat: 45.5152, long: -122.6784 },
  "San Jose, CA": { lat: 37.3382, long: -121.8863 },
  "Nashville, TN": { lat: 36.1627, long: -86.7816 },
  "Detroit, MI": { lat: 42.3314, long: -83.0458 },
};

// Function to randomly select a city
export const getRandomCity = () => {
  const cityKeys = Object.keys(cities);
  const randomKey = cityKeys[Math.floor(Math.random() * cityKeys.length)];
  return { city: randomKey, ...cities[randomKey] };
};
