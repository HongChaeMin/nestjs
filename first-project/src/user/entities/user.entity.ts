import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { UserResponse } from '../dto/response/response';
import { UserRole } from './user.role';

@Entity()
export class User extends BaseEntity {

  @Column({ unique: true, nullable: false })
  account: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.SILVER })
  role: UserRole;

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
