import { useEffect, useState } from 'react';
import { citiesFromJSON } from '../../../shared/data/cities.data';
import { useNearestCities } from '../hooks/nearest-cities.hook';
import { useSearchCities } from '../hooks/search-cities.hook';
import { City } from '../models/city.interface';
import InputComponent from './components/input.component';
import ListCitiesComponent from './components/list-cities.component';
import './components/styles/index.css';


export default function FindNearestComponent() {
  const [cities, setCities] = useState<City[]>([]);

  const { filteredCities, search } = useSearchCities({ cities });
  const { selectedCity, handleCity, nearestCities } = useNearestCities({ cities });


  useEffect(() => {
    setCities(citiesFromJSON);
  }, []);


  return (
    <section>
      <article className="card flex justify-content-center">
        <InputComponent
          selectedCity={selectedCity}
          handleCity={handleCity}
          filteredCities={filteredCities}
          search={search}
        />
      </article>

      <br /><br />

      <article className="card flex justify-content-center">
        {nearestCities.length > 0 && <ListCitiesComponent nearestCities={nearestCities} />}
      </article>
    </section>

  )
}
