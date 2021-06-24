import { Test, TestingModule } from '@nestjs/testing';
import { UsresController } from './usres.controller';

describe('UsresController', () => {
  let controller: UsresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsresController],
    }).compile();

    controller = module.get<UsresController>(UsresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
