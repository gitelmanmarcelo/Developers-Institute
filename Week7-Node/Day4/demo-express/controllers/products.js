const { getAllProducts,
     getProductById, 
     insertProduct,
     updateProduct,
     deleteProduct} = require('../modules/products.js');

console.log('controller');


const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        console.log(data);
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })

};

const _getProductById = (req, res) => {
    getProductById(req.params.id)
    .then(data => {
        console.log(data);
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
};

const _insertProduct = (req,res) => {
    insertProduct(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _updateProduct = (req,res) => {
    updateProduct(req.params.id,req.body)
    .then(data => {
        res.json(data);
       })
   .catch( err => {
       console.log(err);
   })
}

const _deleteProduct = (req,res) => {
    deleteProduct(req.params.id)
    .then(data => {
        res.json(data);
       })
   .catch( err => {
       console.log(err);
   })
}

module.exports = {
    _getAllProducts,
    _getProductById,
    _insertProduct,
    _updateProduct,
    _deleteProduct
};

