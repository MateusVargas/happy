import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images') // associando o model com a tabela
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)//muitas imagens pra um orfanato
    @JoinColumn({ name: 'orphanage_id'} )
    orphanage: Orphanage
}