import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ListCitiesComponent from '../pages/components/list-cities.component';
import FindNearestComponent from '../pages/find-nearest.component';


// describe("Test", () => {
//   it("testing the vitest", () => {
//     expect(true).toBeTruthy()
//       ;
//   })
// });


test('Render Parent component', () => {
  render(<FindNearestComponent />);
});

test('Render List from nearest 4 cities', async () => {
  const cities = [
    { "country": "US", "name": "Little Ferry", "lat": "40.85288", "lng": "-74.04208" },
    { "country": "US", "name": "Hackensack", "lat": "40.88593", "lng": "-74.04347" },
    { "country": "US", "name": "Ridgefield Park", "lat": "40.85704", "lng": "-74.02153" },
    { "country": "US", "name": "Teaneck", "lat": "40.8976", "lng": "-74.01597" }
  ];

  const listCities = render(<ListCitiesComponent nearestCities={cities} />);

  expect(listCities.getByTestId('cities-list').querySelectorAll('li').length).toEqual(4);
});