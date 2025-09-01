import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { MediaType } from './media.type';
import { CreateMediaInput } from './dto/create-media.input';

@Resolver(() => MediaType)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [MediaType])
  async obtenerMedia() {
    return this.mediaService.findAll();
  }

  @Mutation(() => MediaType)
  async crearMedia(@Args('input') input: CreateMediaInput) {
    return this.mediaService.create(input);
  }
}
