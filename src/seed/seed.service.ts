import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    );

    // const promises = [];
    const dataPokemons = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      dataPokemons.push({ name, no });

      // promises.push(
      //   this.pokemonModel.create({
      //     name,
      //     no,
      //   }),
      // );
    });

    // await Promise.all(promises);
    await this.pokemonModel.insertMany(dataPokemons);

    return 'Seed Executed successfully';
  }
}
