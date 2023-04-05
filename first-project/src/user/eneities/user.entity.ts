import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { UserRole } from './user.role';
import { UserResponse } from '../dto/user.response';

@Entity()
export class User extends BaseEntity {

  @Column()
  account!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.SILVER })
  role!: UserRole;

  toResponse() {
    return new UserResponse(
      this.id,
      this.account,
      this.name,
      this.email,
      this.phone,
      this.role,
      this.createdAt,
      this.updatedAt,
    )
  }

}
