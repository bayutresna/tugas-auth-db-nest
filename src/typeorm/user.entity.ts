import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name : 'id_user',
    })
    id:number;

    @Column({
        nullable: false,
        default:'',
    })
    nama:string;
    
    @Column({
        nullable:false,
        default:'',
    })
    password: string;

    @Column({
        nullable: false,
        default:'',
    })
    email:string;

    @Column({
        nullable: true,
        default:'',
    })
    foto:string;

}