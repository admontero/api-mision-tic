const Product = require('../models/Product');

const productCtr = {};


productCtr.getProducts= async (req, res) => {
    const product = await Product.find();
    res.json(product)
}

productCtr.createProducts = async(req, res) => { 
    const {_id,name,stock,brand} = req.body;
    const newProduct = new Product(
        {
            _id,
            name,
            stock,
            brand
        }
    )
    await newProduct.save();
    res.json({message:`nota con titulo ${newProduct.name}, ha sido guardada`})
}

productCtr.getProduct = async(req,res) =>{
    const prduct = await Product.findById(req.params.id);
    res.json(prduct)
}

productCtr.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message:'product-delete'})
};

productCtr.updateProduct = async (req, res) => {
    const {name,stock,brand} = req.body;
    
    await Product.findOneAndUpdate({_id:req.params.id},
        {
            name : name,
            stock: stock,
            brand : brand
        }
    )
    res.json({message:'note-update'})
}



module.exports = productCtr;