export default {
    jwt: {
        //Isso era pra tar no .env mas tava dando string | undefined sla pq
        secret: 'SUPERSECRET',
        expiresIn: '2d'
    }
}