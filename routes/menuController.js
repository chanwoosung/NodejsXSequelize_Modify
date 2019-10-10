const Menu=require('../models').Menu;

//promise형
// exports.makemenu=(req,res,next)=>{
    
//     Menu.create({ 
//        me_code:req.body.code,
//        me_name:req.body.name,
//        me_link:req.body.link,
//        me_target:'self',
//        me_use:1,
//        me_mobile_use:1,
//    })
//    .then((result)=>{
//        res.status(200).json({
//            message:1,
//            data:result
//        });
//    })
//    .catch((error)=>{
//        console.error(error);
//        res.status(500).json({
//            message:0,
//            data:error
//        });
//        next(error);
//    });

// };

// exports.deletemenu=(req,res,next)=>{
//     Menu.destroy({
//        where:{
//            me_code:req.body.code
//        }
//    }).then((result)=>{
//        res.json({
//            message:1,
//            data:result
//        });
//    }).catch((error)=>{
//        res.error(error);
//        res.status(500).json({
//            message:0,
//            data:error
//        });
//        next(error);
//       });
// };

//async형
exports.makemenu=async(req,res,next)=>{
    try {
        const createMenu=await Menu.create({ 
            me_code:req.body.code,
            me_name:req.body.name,
            me_link:req.body.link,
            me_target:'self',
            me_use:1,
            me_mobile_use:1,
        });
        const menuJson=await ((result)=>{
            res.status(200).json({
                message:1,
                data:result
            });
        });
        await menuJson(createMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        });
        next(error);
    }
};

exports.deletemenu=async(req,res,next)=>{
    try {
        const deletemenu=await  Menu.destroy({
            where:{
                me_code:req.body.code
            }
        });
        const menuJson=await ((result)=>{
            res.status(200).json({
                message:1,
                data:result
            });
        });
        await deletemenu(menuJson);
    } catch (error) {
        res.error(error);
        res.status(500).json({
            message:0,
            data:error
        });
        next(error);
    }
   
};
