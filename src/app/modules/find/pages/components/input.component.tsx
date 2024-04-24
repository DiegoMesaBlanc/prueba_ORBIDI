import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { City } from '../../models/city.interface';


interface Props {
  selectedCity: City | undefined;
  filteredCities: City[] | undefined;
  search: (event: AutoCompleteCompleteEvent) => void;
  handleCity: (e: City) => void;
}


export default function InputComponent({ selectedCity, filteredCities, search, handleCity }: Props) {
  return (
    <div className="col-6">
      <div className="flex flex-column gap-2">
        <label htmlFor="find_nearest">Find nearest city</label>

        <AutoComplete
          field='name'
          placeholder='Type city you are!'
          data-testid="autocomp-cities"
          aria-describedby="find-city-help"
          value={selectedCity}
          suggestions={filteredCities}
          completeMethod={search}
          onChange={(e: AutoCompleteChangeEvent) => handleCity(e.value)}
        />
      </div>
    </div>
  )
}
