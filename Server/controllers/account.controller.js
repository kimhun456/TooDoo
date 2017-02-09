/**
 * Controller for Account Manage
 * @return the object has basic RESTFUL functions.
 */
const AcountController = (Account) => {
  const AccountObj = {};

  AccountObj.PostAccount = (req, res) => {
    const newAccount = new Account(req.body);
    newAccount.save((err, account) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
        return;
      }
      res.json({ status: true, account });
    });
  };

  AccountObj.GetAccount = (req, res) => {
    Account.find((err, accounts) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
      }
      res.json({ status: true, accounts });
      return accounts;
    });
  };

  AccountObj.UpdateAccount = (req, res) => {
    Account.findById(req.body.id, (err, account) => {
      const modifiedAccount = account;
    //  Todo: update the account
      modifiedAccount.save((error) => {
        if (error) {
          res.status(500).json({ status: false, error: err.message });
        }
        res.json({
          status: true,
          message: 'Status updated successfully',
        });
      });
    });
  };

  AccountObj.DeleteAccount = (req, res) => {
    Account.remove({ _id: req.body.id }, (err) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
      }
      res.json({ status: true, message: 'Todo deleted successfully' });
    });
  };
  return AccountObj;
};

module.exports = AcountController;
