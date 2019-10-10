const Group=require('../models').Group;
// Promise 형 
// exports.insertGroup=(req,res,next)=>{
//     Group.create({
//             gr_id:req.body.gr_id,
//             gr_subject:req.body.gr_subject,
//             gr_use_access:req.body.gr_use_access,
//             gr_device:req.body.gr_device,
//             gr_order:req.body.gr_order
//         }).then((result)=>{
//             res.json({
//                 message:1,
//                 dasta:result
//             });
//         }).catch((error)=>{
//             console.error(error);
//             res.status(500).json({
//                 message:0,
//                 data:error
//             })
//             next(error);
//         });
//     };
    
// exports.updateGroup=(req,res,next)=>{
//     Group.update({
//        gr_id:req.body.gr_id,
//        gr_subject:req.body.gr_subject,
//        gr_use_access:req.body.gr_use_access,
//        gr_device:req.body.gr_device,
//        gr_order:req.body.gr_order
//    },{
//        where:{
//            gr_id:req.body.gr_id  
//        }
//    }).then((result)=>{
//        res.json({
//            message:1,
//            data:result
//        });
//    }).catch((error)=>{
//        console.error(error);
//        res.status(500).json({
//            message:0,
//            data:error
//        });
//        next(error);
//    });
// };

// exports.deleteGroup=(req,res,next)=>{
//     Group.destroy({
//        where:{
//            gr_id:req.body.gr_id  
//        }
//    }).then((result)=>{
//        res.json({
//            message:1,
//            data:result
//        });
//    }).catch((error)=>{
//        console.error(error);
//        res.status(500).json({
//            message:0,
//            data:error
//        });
//        next(error);
//    });
// };

exports.insertGroup=async(req,res,next)=>{
    try {
        const createGroup= await Group.create({
            gr_id:req.body.gr_id,
            gr_subject:req.body.gr_subject,
            gr_use_access:req.body.gr_use_access,
            gr_device:req.body.gr_device,
            gr_order:req.body.gr_order
        });
        const groupJson=await((result)=>{
            res.json({
                message:1,
                data:result
            });
        });
        await groupJson(createGroup);
    } catch (error) {
        console.error(error);
            res.status(500).json({
                message:0,
                data:error
            })
            next(error);
    }
}
    
exports.updateGroup=async(req,res,next)=>{
    try {
        const updateGroup=await Group.update({
            gr_id:req.body.gr_id,
            gr_subject:req.body.gr_subject,
            gr_use_access:req.body.gr_use_access,
            gr_device:req.body.gr_device,
            gr_order:req.body.gr_order
        },{
            where:{
                gr_id:req.body.gr_id  
            }
        });
        const groupJson=await((result)=>{
            res.json({
                message:1,
                data:result
            });
        });
        await groupJson(updateGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        });
        next(error);
    }
}
exports.deleteGroup=async(req,res,next)=>{
    try {
        const destroyGroup=await Group.destroy({
            where:{
                gr_id:req.body.gr_id  
            }
        });
        const groupJson=await((result)=>{
            res.json({
                message:1,
                data:result
            });
        });
        groupJson(destroyGroup)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        });
        next(error)
    }
}