import type { Stadium } from '@/types';

export const stadiums: Stadium[] = [
  { id: 1, name: 'MetLife Stadium', city: 'East Rutherford', country: 'USA', capacity: 82500 },
  { id: 2, name: 'SoFi Stadium', city: 'Los Angeles', country: 'USA', capacity: 70240 },
  { id: 3, name: 'AT&T Stadium', city: 'Dallas', country: 'USA', capacity: 80000 },
  { id: 4, name: 'Hard Rock Stadium', city: 'Miami', country: 'USA', capacity: 65326 },
  { id: 5, name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'USA', capacity: 71000 },
  { id: 6, name: 'NRG Stadium', city: 'Houston', country: 'USA', capacity: 72220 },
  { id: 7, name: 'Lumen Field', city: 'Seattle', country: 'USA', capacity: 68740 },
  { id: 8, name: "Levi's Stadium", city: 'Santa Clara', country: 'USA', capacity: 68500 },
  { id: 9, name: 'Lincoln Financial Field', city: 'Philadelphia', country: 'USA', capacity: 69176 },
  { id: 10, name: 'Arrowhead Stadium', city: 'Kansas City', country: 'USA', capacity: 76416 },
  { id: 11, name: 'Gillette Stadium', city: 'Foxborough', country: 'USA', capacity: 65878 },
  { id: 12, name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', capacity: 87523 },
  { id: 13, name: 'Estadio Akron', city: 'Guadalajara', country: 'Mexico', capacity: 49850 },
  { id: 14, name: 'Estadio BBVA', city: 'Monterrey', country: 'Mexico', capacity: 53500 },
  { id: 15, name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: 54500 },
  { id: 16, name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 30000 },
];

export function getStadiumById(id: number): Stadium | undefined {
  return stadiums.find((s) => s.id === id);
}
