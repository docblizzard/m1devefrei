import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models.js";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  validateUrl(url: string): boolean {
    const pattern = /^https:\/\/ghibliapi\.dev\/\w+\/[0-9a-f-]+$/;
    return pattern.test(url);
  }

  async getFilms() {
    const films = await this.get<FilmModel[]>('films')
    for (let i = 0; i < films.length; i++) {
      const film = films[i];
      const peopleObject = [];
      for (const urlOrObject of film.people) {
          if (typeof urlOrObject === 'string') {
              const id = urlOrObject.substring(urlOrObject.lastIndexOf('/') + 1);
              const person = await this.getPeoplebyId(id);
              peopleObject.push(person);
          } else {
            peopleObject.push(urlOrObject);
          }
      }
      film.people = peopleObject;
    }
      // console.log("hello", films[1])
      return films
    }

  async getPeople() {
    const peoples = await this.get<PeopleModel[]>('people')
    for (let i = 0; i < peoples.length; i++) {
      const people = peoples[i];
      const filmsObject = [];
      for (const urlOrObject of people.films) {
          if (typeof urlOrObject === 'string') {
              const id = urlOrObject.substring(urlOrObject.lastIndexOf('/') + 1);
              const person = await this.getFilmbyId(id);
              filmsObject.push(person);
          } else {
            filmsObject.push(urlOrObject);
          }
      }
      people.films = filmsObject;
    }
    console.log(peoples[0])
    return peoples
  }

  async getPeoplebyId(id: string) {
    const people = await this.get<PeopleModel[]>(`people/${id}`)
    return people
  }

  async getFilmbyId(id: string){
    const film = await this.get<FilmModel[]>(`films/${id}`)
    return film
  }
}