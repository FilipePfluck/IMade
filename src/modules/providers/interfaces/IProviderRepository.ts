import ICreateProviderDto from "./ICreateProviderDto";
import Provider from "../infra/typeorm/entities/provider";

export default interface IProviderRepository {
    create(data: ICreateProviderDto): Promise<Provider> 
    save(data: Provider): Promise<Provider>
    find(): Promise<Provider[]>
    findById(id: string): Promise<Provider | undefined>
    delete(id: string): Promise<void>
}