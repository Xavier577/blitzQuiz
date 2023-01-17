import { SerializedUserDto } from '@common/dtos/serialized-user.dto';
import { Expose, Type } from 'class-transformer';

export class GetUserDto {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  @Type(() => SerializedUserDto)
  data: SerializedUserDto;
}
