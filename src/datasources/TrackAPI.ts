import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    getTracks(){
        return this.get('tracks')
    }

    getAuthorBy(id: string){
        return this.get('author/${id}')
    }
}