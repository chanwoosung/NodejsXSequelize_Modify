const Board=require('../models').Board;
//프로미스형
// exports.controlBoard=(req,res,next)=>{
//     Board.update({
//        bo_table:req.body.newtable,
//        bo_subject:req.body.subject,
//        bo_use_sns:req.body.sns,
//        bo_use_search:req.body.search,
//        bo_order:0,
//        gr_id:'custom',
//        bo_mobile_skin:'basic',
//    },{
//        where:{
//            bo_table:req.body.table
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
//        })
//        next(error);
//    });
// };

//async/await형
exports.controlBoard=async(req,res,next)=>{
    try {
        const conBoard=await Board.update({
           bo_table:req.body.newtable,
           bo_subject:req.body.subject,
           bo_use_sns:req.body.sns,
           bo_use_search:req.body.search,
           bo_order:0,
           gr_id:'custom',
           bo_mobile_skin:'basic',
       },{
           where:{
               bo_table:req.body.table
           }
       });
       const resultJson=await((result)=>{
        res.json({
            message:1,
            data:result
        });
    });
       await resultJson(conBoard);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        })
        next(error); 
    }
   
};