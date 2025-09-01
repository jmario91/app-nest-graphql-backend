import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media } from './media.schema';
import { CreateMediaInput } from './dto/create-media.input';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async findAll(): Promise<Media[]> {
    return this.mediaModel.find().exec();
  }

  async create(input: CreateMediaInput): Promise<Media> {
    const created = new this.mediaModel(input);
    return created.save();
  }
}
