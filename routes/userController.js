const express=require('express');
const User=require('../models');

//async/await 형
exports.list=async(req,res,next)=>{
    try {
     const list=  await User.findAll({ attributes:['mb_id','mb_password','mb_name','mb_email','mb_level','mb_datetime']});
     const userJson= await ((users)=>{
        res.render('list',{
            title:'user List',
            users,
        });
    });
    userJson(list);
    } catch (error) {
        console.error(error);
       next(error);
    }
};

exports.newbie=async(req,res,next)=>{
    try {
        const newbie=await
        User.findAll({ 
            attributes:['mb_id','mb_password','mb_name','mb_email','mb_level','mb_datetime'],
            order:[['mb_datetime','DESC']],
            limit:5,
            offset:0,
        });
        const userJson= await ((users)=>{
            res.render('list',{
                title:'user List',
                users,
            });
        });
        userJson(newbie);
    } catch (error) {
        console.error(error);
       res.status(500).json({
           message:0,
           data:error
       })
       next(error);
    }
};

exports.controlUser=async(req,res,next)=>{
    try {
        const controlUser=await 
        User.update({
            mb_password:req.body.password,
            mb_name:req.body.name,
            mb_nick:req.body.nick,
            mb_hp:req.body.hp,
            mb_adult:req.body.adult,
            mb_mailling:req.body.mailling,
            mb_level:req.body.level,
            mb_email:req.body.email
         },{
            where:{ mb_id:req.body.id}
         });
         const userJson= await ((users)=>{
            res.render('list',{
                title:'user List',
                users,
            });
        }); 
        userJson(controlUser);
    } catch (error) {
        res.error(error);
       res.status(500).json({
           message:0,
           data:error
       });
       next(error);
    }
};

exports.deleteUser=async(req,res,next)=>{
    try {
        const deleteUser=await
        User.destroy({
            where:{
                me_id:req.body.id
            }
        });
        const userJson= await ((users)=>{
            res.render('list',{
                title:'user List',
                users,
            });
        }); 
        userJson(deleteUser);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

//promise형
// exports.list=(req,res,next)=>{
//     User.findAll({ attributes:['mb_id','mb_password','mb_name','mb_email','mb_level','mb_datetime']})
//    .then((users)=>{
//        res.render('list',{
//            title:'user List',
//            users,
//        });
//    })
//    .catch((error)=>{
//        console.error(error);
//        next(error);
//    })

// };

// exports.newbie=(req,res,next)=>{
//     User.findAll({ 
//        attributes:['mb_id','mb_password','mb_name','mb_email','mb_level','mb_datetime'],
//        order:[['mb_datetime','DESC']],
//        limit:5,
//        offset:0,
//    })
//    .then((users)=>{
//        //res.json(users);
//        res.render('list',{
//            title:'user List',
//            users,
//            message:1
//        });
//    })
//    .catch((error)=>{
//        console.error(error);
//        res.status(500).json({
//            message:0,
//            data:error
//        })
//        next(error);
//    })

// };

// exports.controlUser=(req,res,next)=>{
//     User.update({
//       mb_password:req.body.password,
//       mb_name:req.body.name,
//       mb_nick:req.body.nick,
//       mb_hp:req.body.hp,
//       mb_adult:req.body.adult,
//       mb_mailling:req.body.mailling,
//       mb_level:req.body.level,
//       mb_email:req.body.email
//    },{
//       where:{ mb_id:req.body.id}
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
//    });
// };

// exports.deleteUser=(req,res,next)=>{
//     User.destroy({
//        where:{
//            me_id:req.body.id
//        }
//    }).then((result)=>{
//        res.json(result);
//    }).catch((error)=>{
//        console.error(error);
//        next(error);
//    });
// };
