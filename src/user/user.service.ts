import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  test(): IUser[] {
    return [];
  }

  findAll(): IUser[] {
    const data = fs.readFileSync('data/users.json', 'utf-8');
    return JSON.parse(data) as IUser[];
  }
}
