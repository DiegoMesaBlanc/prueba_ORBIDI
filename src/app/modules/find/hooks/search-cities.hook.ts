import { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { useState } from 'react';
import { City } from '../models/city.interface';



export const useSearchCities = ({ cities }: { cities: City[] }) => {
  const [filteredCities, setFilteredCities] = useState<City[]>();

  const search = (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...cities];
      }
      else {
        _filteredCountries = cities.filter((city) => {
          return city.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCities(_filteredCountries);
    }, 250);
  }


  return { filteredCities, search }
}