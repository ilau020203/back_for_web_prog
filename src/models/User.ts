import { IsDefined, MinLength } from 'class-validator';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,  
} from 'typeorm';

import { RoleType } from '../common/enums';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    nullable: true,
    })
    refreshToken?: string;

    @Column()
    @MinLength(32)
    @IsDefined()
    passwordHash!: string;

    @Column({
    length: 255,
    })
    @MinLength(4)
    email!: string;

    @Column({
    length: 80,
    })
    @IsDefined()
    username!: string;

    @Column({
    default: RoleType.CANDIDATE,
    })
    roleId!: RoleType;

    @CreateDateColumn({ type: 'timestamptz' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    public updatedAt!: Date;

    
}
