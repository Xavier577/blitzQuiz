import { Test, TestingModule } from '@nestjs/testing';
import { QuestionFactory } from './question.factory';

describe('QuestionFactory', () => {
  let provider: QuestionFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionFactory],
    }).compile();

    provider = module.get<QuestionFactory>(QuestionFactory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
