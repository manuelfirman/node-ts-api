import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; //-> directorio actual
const router = Router();

// remueve el .ts del nombre del archivo
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
}

// Lee cada archivo del directorio de PATH_ROUTER
// Por cada archivo se importa su correspondiente router (nombre, router)
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`)
            .then((moduleRouter) => {
                console.log(`Cargando ruta: ${cleanName} ...`);
                router.use(`/${cleanName}`, moduleRouter.router);
            })
            
    }
})


export { router };