import { getClient } from '../../database/initMongoDB';
import { ObjectId } from 'mongodb';
import { v4 } from 'uuid';
import dayjs from 'dayjs';

class BankAccountService {
  async getAllAccount() {
    const client = getClient();
    const collection = client.db('avaliacao-pratica').collection('accounts');

    try {
      const result = await collection.find().toArray();

      let accountInfo = [];

      result.forEach((user) => {
        user?.accounts?.forEach((account) => {
          accountInfo.push({
            id: account.id,
            name: user.name,
            cpf: user.cpf,
            accountNumber: account.accountNumber,
          });
        });
      });

      return accountInfo;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async createProduct(data) {
    const client = getClient();
    const collection = client.db('avaliacao-pratica').collection('products');

    try {
      const result = await collection.insertOne(data);
      return result;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async updateProduct(id, data) {
    const client = getClient();
    const collection = client.db('avaliacao-pratica').collection('products');

    try {
      const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
      return result;
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async deleteProduct(id) {
    const client = getClient();
    const collection = client.db('avaliacao-pratica').collection('product');
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (error) {
      console.error('Error: ', error);
    }
  }
  async list() {
    const client = getClient();
    const collection = client.db('avaliacao-pratica').collection('products');

    try {
      const result = await collection.find().toArray();
      return result;
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}

export default BankAccountService;
