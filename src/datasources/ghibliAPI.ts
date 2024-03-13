import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models.js";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  validateUrl(url: string): boolean {
    const pattern = /^https:\/\/ghibliapi\.dev\/\w+\/[0-9a-f-]+$/;
    return pattern.test(url);
  }

  async getFilms() {
    return this.get<FilmModel[]>('films')
    
  }

  async getPeople() {
    const peoples = await this.get<PeopleModel[]>('people')
    return peoples
  }

}