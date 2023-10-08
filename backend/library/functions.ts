export class Functions {
    constructor(){}

    response = (status_code : number, data : any[], message : string) => {
        return {
            status_code,
            data, 
            message
        }
    }
}