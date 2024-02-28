import { IsNumber, IsString } from 'class-validator';

export class createInfoDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly power: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly img: string;
}
