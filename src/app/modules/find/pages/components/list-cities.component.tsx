import { City } from '../../models/city.interface'


interface Props {
  nearestCities: City[]
}


export default function ListCitiesComponent({ nearestCities = [] }: Props) {
  return (
    <div>
      <h3>Cercanos: </h3>

      <div>
        {
          nearestCities.map((city_view) => (
            <li key={city_view.name}>{city_view.name} - {city_view.journey} Kms</li>
          ))
        }
      </div>
    </div>
  )
}
