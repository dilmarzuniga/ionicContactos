import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const contactos = [
            { id: 1, nombre: 'ana', apellido: 'caicedo', empresa: 'telmex', telefono: '3105243456', correo: 'anacaicedo@gmail.com' },
            { id: 2, nombre: 'maria', apellido: 'paz', empresa: 'claro', telefono: '3101234324', correo: 'mariapaz@gmail.com' },
            { id: 3, nombre: 'carlos', apellido: 'zuñiga', empresa: 'oracle', telefono: '3122673456', correo: 'carloszuniga@gmail.com' },
            { id: 4, nombre: 'alejandra', apellido: 'quintero', empresa: 'ips', telefono: '3214433451', correo: 'alejandraq@gmail.com' },
            { id: 5, nombre: 'luis', apellido: 'perez', empresa: 'hds', telefono: '3122345624', correo: 'luisperez@gmail.com' },
        ];
        return { contactos };
    }
}