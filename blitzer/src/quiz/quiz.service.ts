import { Injectable } from '@nestjs/common';
import AsyncHook from '../shared/helpers/async-hook';
import { TokenService } from 'src/token/token.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizFactory } from './quiz.factory';
import { DEFAULT_LINK_TOKEN_EXPIRY } from '../shared/constants';
import { UsersFactory } from '../users/users.factory';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizFactory: QuizFactory,
    private readonly userFactory: UsersFactory,
    private readonly tokenService: TokenService,
  ) {}

  async create(creatorId: string, createQuizDto: CreateQuizDto) {
    const [quiz, quizCreateError] = await AsyncHook(
      this.quizFactory.createQuiz(createQuizDto),
    );

    if (quizCreateError) throw quizCreateError;

    const [, userUpdateError] = await AsyncHook(
      this.userFactory.updateUser({
        where: { userId: creatorId },
        data: { quizzes: { connect: { quizId: quiz.quizId } } },
      }),
    );

    if (userUpdateError) throw userUpdateError;

    return this.tokenService.encode(
      { sub: quiz.quizId },
      { expiresIn: quiz.expire },
    );
  }

  async generateQuizToken(
    quizId: string,
    expiresIn = DEFAULT_LINK_TOKEN_EXPIRY,
  ) {
    return this.tokenService.encode({ sub: quizId }, { expiresIn });
  }

  async fetchQuiz(quizToken: string) {
    const [payload, isExpired, tokenDecodeError] =
      await this.tokenService.decode(quizToken);
    if (tokenDecodeError || isExpired) throw tokenDecodeError;

    const [quiz, quizRetrieveError] = await AsyncHook(
      this.quizFactory.findQuizById(payload.sub),
    );

    if (quizRetrieveError) throw quizRetrieveError;

    return quiz;
  }

  fetchAllQuizzesSet(userId: string) {
    return this.quizFactory.findQuizzes({ where: { creatorId: userId } });
  }
}
