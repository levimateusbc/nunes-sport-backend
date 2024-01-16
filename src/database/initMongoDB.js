import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/avaliacao-pratica';
const client = new MongoClient(uri);

export function getClient(){
    return client;
}

class MongoConnect {
    constructor(){
        this.init();
    }

    async init(){
        try{
            await client.connect();
            console.log('Conexão com o banco realizada com sucesso!!');
        }catch(error){
            console.error('Erro ao conectar: ', error);
        }
    }
}

export default new MongoConnect();