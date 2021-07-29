export interface PostInterface {
    //User
    idUser?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    //comentario
    titulo?: string;
    comentario?: string;
    start_time?: Date;
    update_time?: Date;
    isUpdate?: boolean;
    idC?: string | null;
}