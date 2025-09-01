import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MediaType {
  @Field(() => ID)
  id: string;

  @Field()
  tipo: string;

  @Field()
  src: string;

  @Field()
  alt: string;

  @Field()
  categoria: string;

  @Field()
  subcategoria: string;
}
