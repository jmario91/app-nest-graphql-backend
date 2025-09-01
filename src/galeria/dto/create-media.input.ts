import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaInput {
  @Field()
  tipo: string;

  @Field()
  src: string;

  @Field()
  alt: string;

  @Field({ nullable: true })
  categoria?: string;

  @Field({ nullable: true })
  subcategoria?: string;
}
