import { useCallback, useState } from 'react';
import { City } from '../models/city.interface';
import { useCheckDistance } from './check-distance.hook';



export const useNearestCities = ({ cities }: { cities: City[] }) => {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [nearestCities, setNearestCities] = useState<City[]>([]);

  const { distance } = useCheckDistance();


  const handleCity = useCallback((city: City) => {
    setSelectedCity(city);
    setNearestCities([]);

    const valid = typeof city === 'object';

    if (valid) {
      const nearest_cities = cities.map((city_el) => {
        const info_city = {
          lat1: parseFloat(city.lat),
          lon1: parseFloat(city.lng),
          lat2: parseFloat(city_el.lat),
          lon2: parseFloat(city_el.lng)
        }

        const distance_each_city = distance(info_city);

        return { ...city_el, journey: parseFloat(distance_each_city.toFixed(2)) }
      });

      nearest_cities.sort((a, b) => a.journey - b.journey);

      console.log('Entra.........', nearest_cities);
      setNearestCities(nearest_cities.slice(1, 5))
    }
  }, [cities, distance])


  return { handleCity, selectedCity, nearestCities }
}