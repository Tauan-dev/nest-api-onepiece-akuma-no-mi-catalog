import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createInfoDTO } from 'src/catalog/dto/createinfo.dto';
import { Info } from 'src/catalog/entities/info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
  ) {}

  async findAll() {
    return await this.infoRepository.find();
  }

  async findGroup(type: string) {
    return await this.infoRepository.find({
      where: { type },
    });
  }

  async findOne(id: number) {
    return await this.infoRepository.findOne({
      where: { id },
    });
  }

  async createCatalog(createInfo: createInfoDTO) {
    const info = this.infoRepository.create(createInfo);
    return this.infoRepository.save(info);
  }
}
