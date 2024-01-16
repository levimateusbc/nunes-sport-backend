import BankAccountService from '../service/bankAccountService';

class BankAccountController {
  async createProduct(req, res) {
    const data = req.body;
    const service = new BankAccountService();
    const result = await service.createProduct(data);
    res.status(200).json({ result });
  }

  async listAllProducts(req, res) {
    const data = req.body;
    const service = new BankAccountService();
    const result = await service.list(data);
    res.status(200).json({ result });
  }


  async deleteProduct(req, res) {
    const id = req.query.id;
    const service = new BankAccountService();
    const result = await service.deleteProduct(id);
    res.status(200).json({ result });
  }

  async updateProduct(req, res) {
    const id = req.query.id;
    const data = req.body;
    const service = new BankAccountService();
    const result = await service.updateProduct(id, data);
    res.status(200).json({ result });
  }
}

export default new BankAccountController();
