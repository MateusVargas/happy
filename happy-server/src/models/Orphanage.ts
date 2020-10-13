//"strictPropertyInitialization": false no tsconfig.json
//"experimentalDecorators": true,
//"emitDecoratorMetadata": true // habilitando decorator

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('orphanages') // associando o model com a tabela
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: number

    @Column()
    latitude: number

    @Column()
    longitude: number

    @Column()
    about: string

    @Column()
    instructions: string

    @Column()
    opening_hours: string

    @Column()
    open_on_weekends: boolean
}