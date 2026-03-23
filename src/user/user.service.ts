import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: string, fields?: string[]): Partial<IUser> {
    const users = this.findAll();
    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (fields === undefined) {
      return user;
    }

    if (fields.length === 0) {
      return {};
    }

    const result: Partial<IUser> = {};

    for (const field of fields) {
      if (field in user) {
        result[field as keyof IUser] = user[field as keyof IUser];
      }
    }

    return result;
  }
}
