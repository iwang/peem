import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const gues = [
      { id: '0001', name: 'Augmentum' },
      { id: '0002', name: 'IBM' },
      { id: '0003', name: 'Infosys' },
      { id: '0004', name: 'Lenovo' },
      { id: '0005', name: 'Samba' },
      { id: '0006', name: 'Toyota' },
      { id: '0007', name: 'Suziki' },
      { id: '0008', name: 'Honda' },
      { id: '0009', name: 'ICBC' },
      { id: '0010', name: 'Huawei' },
      { id: '0011', name: 'ZTE' }
    ];
   return {heroes, gues};
 }