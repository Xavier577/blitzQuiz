import { UsersService } from '@api/users/users.service';
import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { QuizRepository } from '@repositories/quiz.repository';

@Injectable()
export class QuizService {
  private readonly logger = new Logger(QuizService.name);

  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly userService: UsersService,
  ) {}

  public async getQuizById(id: string) {
    return this.quizRepository.find({
      where: { id },
      include: { questions: true, submissions: true },
    });
  }

  public async getCreatedQuiz(id: string, userId: string) {
    const user = await this.userService.getUserById(userId);

    if (user == null) {
      this.logger.error('invalid userId');

      throw new ConflictException('something went wrong');
    }

    const quizCreatedByUser = await this.quizRepository.find({
      where: { creatorId: user.profile.id, id },
      include: { questions: true, submissions: true },
    });

    if (quizCreatedByUser == null) {
      throw new UnauthorizedException();
    }

    return quizCreatedByUser;
  }

  public async getAllCreatedQuizzes(userId: string) {
    const user = await this.userService.getUserById(userId);

    if (user == null) {
      this.logger.error('invalid userId');

      throw new ConflictException('something went wrong');
    }

    const quizzesCreatedByUser = await this.quizRepository.findMany({
      where: { creatorId: user.profile.id },
    });

    return quizzesCreatedByUser;
  }
}
