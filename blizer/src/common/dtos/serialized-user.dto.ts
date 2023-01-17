import { Expose, Type } from 'class-transformer';

export class SerializedProfileDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  profileImage: string;

  @Expose()
  userId: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}

export class SerializedUserDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  @Type(() => SerializedProfileDto)
  profile: SerializedProfileDto;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}
