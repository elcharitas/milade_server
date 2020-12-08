const { body, query } = require('express-validator');

const CreateUserValidator = [
    body('cloud_uuid', 'cloud uuid required').exists().trim(),
    body('phonenumber', 'phone number required').exists().trim()
];

const LoginValidator = [
    body('cloud_uuid', 'cloud uuid required').exists().trim(),
    body('phonenumber', 'phone number required').exists().trim()
];

const DebitWalletValidator = [
    body('amount', 'amount required').exists(),
    body('transaction_type', 'transaction type required').exists(),
    body('cloud_uuid', 'user cloud uuid required').exists().trim(),
    body('receiver_cloud_uuid', 'receivers cloud uuid required').exists().trim(),
    body('phonenumber', 'phone number required').exists().trim(),
    body('paymentMadeType', 'payment type is required').exists().trim().isIn(['ride', 'bike', 'delivery'])
];

const DebitCardValidator = [
    body('amount', 'amount required').exists(),
    body('transaction_type', 'transaction type required').exists(),
    body('cloud_uuid', 'user cloud uuid required').exists().trim(),
    body('receiver_cloud_uuid', 'receivers cloud uuid required').exists().trim(),
    body('phonenumber', 'phone number required').exists().trim(),
    body('paymentMadeType', 'payment type is required').exists().trim().isIn(['ride', 'bike', 'delivery'])
];

const FundWalletValidator =[
    body('amount', 'amount required').exists(),
    body('transaction_type', 'transaction type required').exists().trim(),
    body('cloud_uuid', 'user cloud uuid required').exists().trim()
];

const WithdrawalValidator = [
    body('amount', 'amount required').exists(),
    body('transaction_type', 'transaction type required').exists().trim(),
    body('cloud_uuid', 'user cloud uuid required').exists().trim()
];

const UpdateBankDetailsValidator = [
    body('account_name', 'account name required').exists(),
    body('account_number', 'account number required').exists().trim(),
    body('bank_name', 'bank name required').exists().trim()
]
const UpdateProfileValidator = [
    body('firstname').optional(),
    body('lastname',).optional(),
    body('gender', ).optional(),
    body('profile_image').optional(),
    body('phonenumber').optional(),
    body('username').optional(),
    body('email').optional()
]

const UserValidator= Object.freeze({
    CreateUserValidator,
    LoginValidator,
    DebitWalletValidator,
    DebitCardValidator,
    FundWalletValidator,
    WithdrawalValidator,
    UpdateProfileValidator,
    UpdateBankDetailsValidator
})
module.exports = UserValidator