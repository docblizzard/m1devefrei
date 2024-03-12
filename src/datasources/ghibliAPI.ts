import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models.js";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  getFilms() {
    return this.get<any>('films')
  }

  getPeople() {
    return this.get<any>('people')
  }
}