import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { UserRole } from './user.role';

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

}
