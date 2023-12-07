import { api } from "./api.js"

const dataEndPoints = {
    getAll: "data/motorcycles?sortBy=_createdOn%20desc",
    singleMotor: "data/motorcycles"
}

async function getAllMotors(){
    return api.get(dataEndPoints.getAll);
}

async function getSingleMotor(id){
    return api.get(dataEndPoints.singleMotor + "/" + id);
}

async function createMotor(data){
    return api.post(dataEndPoints.singleMotor, data);
}

async function updateMotor(id, data){
    return api.put(dataEndPoints.singleMotor + "/" + id, data);
}

async function deleteMotor(id){
    return api.del(dataEndPoints.singleMotor + "/" + id);
}

// async function search(query){
//     return api.get(`data/fruits?where=name%20LIKE%20%22${query}%22`)
// }
export const dataService = {
    getAllMotors,
    createMotor,
    getSingleMotor,
    updateMotor,
    deleteMotor
   
}