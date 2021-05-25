import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UpdateProvider from '@modules/providers/services/UpdateProvider'
import UpdateProviderScore from '@modules/providers/services/UpdateProviderScore'

export default class ProviderScoreController {
    public async update(request: Request, response: Response) { 
        try{
            const {id} = request.params
            const {newAvaliation} = request.body

            const updateProviderScore = container.resolve(UpdateProviderScore)

            const provider = updateProviderScore.execute({
                id,
                newAvaliation
            })

            return response.json(provider)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }
} 