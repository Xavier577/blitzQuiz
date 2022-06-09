import { Prisma } from '@prisma/client';

export interface UpdateUserParams {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}

export interface FindAllUsersParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
