export interface RegionI {
    id: number;
    name: string;
}

export interface ProvinciaI {
    id: number;
    regionId: number;
    name: string;
}

export interface DistritoI {
    id: number;
    provinciaId: number;
    name: string;
}

export interface Anticoncepcion {
    Id: number;
    Mes: number;
    Departamento: string;
    Provincia: string;
    Distrito: string;
    Inicio: number;
    Fin: number;
    Metodo: string;
}
