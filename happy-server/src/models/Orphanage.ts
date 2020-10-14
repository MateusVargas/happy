//"strictPropertyInitialization": false no tsconfig.json
//"experimentalDecorators": true,
//"emitDecoratorMetadata": true // habilitando decorator

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image'

@Entity('orphanages') // associando o model com a tabela
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column() //colunas no banco recebem diretiva @Column
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

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update', 'remove']
    }) //relacionamento um pra muitos
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[]
}