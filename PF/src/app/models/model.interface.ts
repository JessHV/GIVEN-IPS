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