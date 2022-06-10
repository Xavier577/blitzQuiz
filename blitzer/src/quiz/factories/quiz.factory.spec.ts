import { Test, TestingModule } from '@nestjs/testing';
import { QuizFactory } from './quiz.factory';

describe('QuizFactory', () => {
  let provider: QuizFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizFactory],
    }).compile();

    provider = module.get<QuizFactory>(QuizFactory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
