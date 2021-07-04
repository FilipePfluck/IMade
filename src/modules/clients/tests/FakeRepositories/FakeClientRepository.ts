import { uuid }  from 'uuidv4'

import ICreateClientDto from "@modules/clients/interfaces/ICreateClientDto";
import IClientRepository from "@modules/clients/interfaces/IClientRepository";

import Client from '../../infra/typeorm/entities/client'

export default class FakeClientRepository 
    implements IClientRepository{
        private clients: Client[] = []

        public async find(): Promise<Client[]>{
            return this.clients
        }

        public async findById(Id: string): Promise<Client | undefined> {
            const client = this.clients.find(client => client.id === Id)

            return client
        }

        public async create(data: ICreateClientDto): Promise<Client>{
            const client = new Client()

            Object.assign(client, {id: uuid(), ...data})

            this.clients.push(client)

            return client
        }

        public async save(client: Client): Promise<Client>{
            const findIndex = this.clients.findIndex(foundclient => foundclient.id === client.id)

            this.clients[findIndex] = client

            return client
        }

        public async delete(id: string): Promise<void> {
            this.clients = this.clients.filter(client => client.id !== id)
        }

        public async findByUserId(user_id: string){
            const  client = this.clients.find(client => client.user_id === user_id)
            return client
        }
    }