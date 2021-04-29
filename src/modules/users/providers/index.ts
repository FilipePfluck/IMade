import { container } from 'tsyringe'

import IHashProvider from './hash/IHashProvider'
import BcryptHashProvider from './hash/BCryptHashProvider'

container.registerSingleton<IHashProvider>(
    'HashProvider', 
    BcryptHashProvider
)