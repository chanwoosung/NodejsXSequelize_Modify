const Payment=require('../models').Payment;

//promise형
// exports.insertPayment=(req,res,next)=>{
//     switch(req.body.product_id){
//        case "1001":
//             Payment.create({
//                mb_id:req.body.mb_id,
//                mb_name:req.body.mb_name,
//                product_id:req.body.product_id,
//                p_type:req.body.p_type,
//                p_name:req.body.p_name,
//                p_number:req.body.p_number,
//                p_charge:req.body.p_charge,
//                p_status:req.body.p_status,
//                p_agree:req.body.p_agree,
//                wdate:req.body.wdate,
//                wip:req.body.wip,
//            }).then((result)=>{
//                res.json({
//                    message:1,
//                    data:result
//                });
//            }).catch((error)=>{
//                console.error(error);
//                res.status(500).json({
//                 message:0,
//                 data:error
//             });
//                next(error);
//            });
//            break;
//         case "1002":
//                  Payment.create({
//                     mb_id:req.body.mb_id,
//                     product_id:req.body.product_id,
//                     mb_name:req.body.mb_name,
//                     p_type:req.body.p_type,
//                     p_name:req.body.p_name,
//                     p_charge:req.body.p_charge,
//                     p_status:req.body.p_status,
//                     p_agree:req.body.p_agree,
//                     wdate:req.body.wdate,
//                     wip:req.body.wip,
//                 }).then((result)=>{
//                     res.json({
//                         message:1,
//                         data:result
//                     });
//                 }).catch((error)=>{
//                     console.error(error);
//                     res.status(500).json({
//                         message:0,
//                         data:error
//                     });
//                     next(error);
//                 });
//             break;
//         case "2002":
//                  Payment.create({
//                     mb_id:req.body.mb_id,
//                     product_id:req.body.product_id,
//                     mb_name:req.body.mb_name,
//                     p_type:req.body.p_type,
//                     p_name:req.body.p_name,
//                     p_charge:req.body.p_charge,
//                     p_status:req.body.p_status,
//                     p_agree:req.body.p_agree,
//                     wdate:req.body.wdate,
//                     wip:req.body.wip,
//                 }).then((result)=>{
//                     res.json({
//                         message:1,
//                         data:result
//                     });
//                 }).catch((error)=>{
//                     console.error(error);
//                     res.status(500).json({
//                         message:0,
//                         data:error
//                     });
//                     next(error);
//                 });
//             break;
//         case "2003":
//                  Payment.create({
//                     mb_id:req.body.mb_id,
//                     mb_name:req.body.mb_name,
//                     product_id:req.body.product_id,
//                     p_type:req.body.p_type,
//                     p_name:req.body.p_name,
//                     p_charge:req.body.p_charge,
//                     p_status:req.body.p_status,
//                     p_agree:req.body.p_agree,
//                     wdate:req.body.wdate,
//                     wip:req.body.wip,
//                 }).then((result)=>{
//                     res.json({
//                         message:1,
//                         data:result
//                     });
//                 }).catch((error)=>{
//                     console.error(error);
//                     res.status(500).json({
//                         message:0,
//                         data:error
//                     });
//                     next(error);
//                 });
//             break;
//         default:
//             console.error("카테고리오류")
//             break;
//     }
// };

// exports.updatePayment=(req,res,next)=>{
//     switch(req.body.product_id){
//         case "1001":
//             switch(req.body.p_type){
//                 case "3":
//                          Payment.update({
//                             idx:req.body.idx,
//                             mb_id:req.body.mb_id,
//                             mb_name:req.body.mb_name,
//                             product_id:req.body.product_id,
//                             p_type:req.body.p_type,
//                             p_status:req.body.p_status,
//                             p_agree:req.body.p_agree,
//                             wdate:req.body.wdate,
//                             wip:req.body.wip,
//                         },{
//                             where:{
//                                idx:req.body.idx
//                             }
//                         }).then((result)=>{
//                             res.json({
//                                 message:1,
//                                 data:result
//                             });
//                         }).catch((error)=>{
//                             console.error(error);
//                             res.status(500).json({
//                                 message:0,
//                                 data:error
//                             });
//                             next(error);
//                         });
//                     break;
//                 case "4":
//                          Payment.update({
//                             idx:req.body.idx,
//                             mb_id:req.body.mb_id,
//                             mb_name:req.body.mb_name,
//                             product_id:req.body.product_id,
//                             p_type:req.body.p_type,
//                             p_name:req.body.p_name,
//                             p_number:req.body.p_number,
//                             p_charge:req.body.p_charge,
//                             p_status:req.body.p_status,
//                             p_agree:req.body.p_agree,
//                             wdate:req.body.wdate,
//                             wip:req.body.wip,
//                         },{
//                             where:{
//                                idx:req.body.idx
//                             }
//                         }).then((result)=>{
//                             res.json({
//                                 message:1,
//                                 data:result
//                             });
//                         }).catch((error)=>{
//                             console.error(error);
//                             res.status(500).json({
//                                 message:0,
//                                 data:error
//                             });
//                             next(error);
//                         });
//                     break;
//                     default:
//                         console.error("p_type error occurred");
//                         break;
//             }
            
//             break;
//          case "1002":
//                   Payment.update({
//                      idx:req.body.idx,
//                      mb_id:req.body.mb_id,
//                      product_id:req.body.product_id,
//                      p_type:req.body.p_type,
//                      p_name:req.body.p_name,
//                      p_number:req.body.p_number,
//                      p_charge:req.body.p_charge,
//                      p_status:req.body.p_status,
//                      p_agree:req.body.p_agree,
//                      wdate:req.body.wdate,
//                      wip:req.body.wip,
//                     },{
//                         where:{
//                            idx:req.body.idx
//                         }
//                  }).then((result)=>{
//                      res.json({
//                          message:1,
//                          data:result
//                      });
//                  }).catch((error)=>{
//                      console.error(error);
//                      res.status(500).json({
//                         message:0,
//                         data:error
//                     })
//                      next(error);
//                  });
//              break;
//          case "2002":
//                   Payment.update({
//                      idx:req.body.idx,
//                      mb_id:req.body.mb_id,
//                      product_id:req.body.product_id,
//                      p_type:req.body.p_type,
//                      p_status:req.body.p_status,
//                      p_agree:req.body.p_agree,
//                      wdate:req.body.wdate,
//                      wip:req.body.wip,
//                     },{
//                         where:{
//                            idx:req.body.idx
//                         }
//                  }).then((result)=>{
//                      res.json({
//                         message:1,
//                         data:result
//                      });
//                  }).catch((error)=>{
//                      console.error(error);
//                      res.status(500).json({
//                         message:0,
//                         data:error
//                     })
//                      next(error);
//                  });
//              break;
//          case "2003":
//                   Payment.update({
//                      idx:req.body.idx,
//                      mb_id:req.body.mb_id,
//                      product_id:req.body.product_id,
//                      p_type:req.body.p_type,
//                      p_name:req.body.p_name,
//                      p_charge:req.body.p_charge,
//                      p_status:req.body.p_status,
//                      p_agree:req.body.p_agree,
//                      wdate:req.body.wdate,
//                      wip:req.body.wip,
//                  },{
//                      where:{
//                         idx:req.body.idx
//                      }
//                  }).then((result)=>{
//                      res.json({
//                          message:1,
//                          data:result
//                      });
//                  }).catch((error)=>{
//                      console.error(error);
//                      res.status(500).json({
//                         message:0,
//                         data:error
//                     })
//                      next(error);
//                  });
//              break;
//          default:
//              console.error("카테고리오류")
//              break;
//      }
// };

// exports.deletePayment=(req,res,next)=>{
//      Payment.destroy({
//         where:{
//             idx:req.body.idx
//         }
//     }).then((result)=>{
//         res.json({
//             message:"idx " +req.body.idx+ " deleted",
//             data: result
//         });
//     }).catch((error)=>{
//         console.error(error);
//         res.status(500).json({
//             message:0,
//             data:error
//         })
//         next(error);
//     });
// };


exports.insertPayment=async(req,res,next)=>{
    try {
        switch(req.body.product_id){
           case "1001":
               const createPayment1 = await  Payment.create({
                mb_id:req.body.mb_id,
                mb_name:req.body.mb_name,
                product_id:req.body.product_id,
                p_type:req.body.p_type,
                p_name:req.body.p_name,
                p_number:req.body.p_number,
                p_charge:req.body.p_charge,
                p_status:req.body.p_status,
                p_agree:req.body.p_agree,
                wdate:req.body.wdate,
                wip:req.body.wip,
            });
            const paymentJson1=await((result)=>{
                res.json({
                    message:1,
                    data:result
                });
            });
            await paymentJson1(createPayment1);
               break;
            case "1002":
                    const createPayment2 = await
                     Payment.create({
                        mb_id:req.body.mb_id,
                        product_id:req.body.product_id,
                        mb_name:req.body.mb_name,
                        p_type:req.body.p_type,
                        p_name:req.body.p_name,
                        p_charge:req.body.p_charge,
                        p_status:req.body.p_status,
                        p_agree:req.body.p_agree,
                        wdate:req.body.wdate,
                        wip:req.body.wip,
                    });
                    const paymentJson2=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson2(createPayment2);
                break;
            case "2002":
                    const createPayment3 = await
                     Payment.create({
                        mb_id:req.body.mb_id,
                        product_id:req.body.product_id,
                        mb_name:req.body.mb_name,
                        p_type:req.body.p_type,
                        p_name:req.body.p_name,
                        p_charge:req.body.p_charge,
                        p_status:req.body.p_status,
                        p_agree:req.body.p_agree,
                        wdate:req.body.wdate,
                        wip:req.body.wip,
                    });
                    const paymentJson3=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson3(createPayment3);
                break;
            case "2003":
                    const createPayment4 = await
                     Payment.create({
                        mb_id:req.body.mb_id,
                        mb_name:req.body.mb_name,
                        product_id:req.body.product_id,
                        p_type:req.body.p_type,
                        p_name:req.body.p_name,
                        p_charge:req.body.p_charge,
                        p_status:req.body.p_status,
                        p_agree:req.body.p_agree,
                        wdate:req.body.wdate,
                        wip:req.body.wip,
                    });
                    const paymentJson4=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson4(createPayment4);
                break;
            default:
                console.error("카테고리오류")
                break;
        }
    } catch (error) {
        console.error(error);
                   res.status(500).json({
                    message:0,
                    data:error
                });
                   next(error);
    }
};

exports.updatePayment=async(req,res,next)=>{
    try {
        switch(req.body.product_id){
            case "1001":
                switch(req.body.p_type){
                    case "3":
                    const updatePayment1=await
                             Payment.update({
                                idx:req.body.idx,
                                mb_id:req.body.mb_id,
                                mb_name:req.body.mb_name,
                                product_id:req.body.product_id,
                                p_type:req.body.p_type,
                                p_status:req.body.p_status,
                                p_agree:req.body.p_agree,
                                wdate:req.body.wdate,
                                wip:req.body.wip,
                            },{
                                where:{
                                   idx:req.body.idx
                                }
                            });
                            const paymentJson1=await((result)=>{
                                res.json({
                                    message:1,
                                    data:result
                                });
                            });
                            await paymentJson1(updatePayment1);
                        break;
                    case "4":
                            const updatePayment2=await
                             Payment.update({
                                idx:req.body.idx,
                                mb_id:req.body.mb_id,
                                mb_name:req.body.mb_name,
                                product_id:req.body.product_id,
                                p_type:req.body.p_type,
                                p_name:req.body.p_name,
                                p_number:req.body.p_number,
                                p_charge:req.body.p_charge,
                                p_status:req.body.p_status,
                                p_agree:req.body.p_agree,
                                wdate:req.body.wdate,
                                wip:req.body.wip,
                            },{
                                where:{
                                   idx:req.body.idx
                                }
                            });
                            const paymentJson2=await((result)=>{
                                res.json({
                                    message:1,
                                    data:result
                                });
                            });
                            await paymentJson2(updatePayment2);
                        break;
                        default:
                            console.error("p_type error occurred");
                            break;
                }
                
                break;
             case "1002":
                    const updatePayment3=await
                      Payment.update({
                         idx:req.body.idx,
                         mb_id:req.body.mb_id,
                         product_id:req.body.product_id,
                         p_type:req.body.p_type,
                         p_name:req.body.p_name,
                         p_number:req.body.p_number,
                         p_charge:req.body.p_charge,
                         p_status:req.body.p_status,
                         p_agree:req.body.p_agree,
                         wdate:req.body.wdate,
                         wip:req.body.wip,
                        },{
                            where:{
                               idx:req.body.idx
                            }
                     });
                     const paymentJson3=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson3(updatePayment3);
                 break;
             case "2002":
                    const updatePayment4=await
                      Payment.update({
                         idx:req.body.idx,
                         mb_id:req.body.mb_id,
                         product_id:req.body.product_id,
                         p_type:req.body.p_type,
                         p_status:req.body.p_status,
                         p_agree:req.body.p_agree,
                         wdate:req.body.wdate,
                         wip:req.body.wip,
                        },{
                            where:{
                               idx:req.body.idx
                            }
                     });
                      const paymentJson4=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson4(updatePayment4);
                 break;
             case "2003":
                    const updatePayment5=await
                      Payment.update({
                         idx:req.body.idx,
                         mb_id:req.body.mb_id,
                         product_id:req.body.product_id,
                         p_type:req.body.p_type,
                         p_name:req.body.p_name,
                         p_charge:req.body.p_charge,
                         p_status:req.body.p_status,
                         p_agree:req.body.p_agree,
                         wdate:req.body.wdate,
                         wip:req.body.wip,
                     },{
                         where:{
                            idx:req.body.idx
                         }
                     });
                     const paymentJson5=await((result)=>{
                        res.json({
                            message:1,
                            data:result
                        });
                    });
                    await paymentJson5(updatePayment5);
                 break;
             default:
                 console.error("카테고리오류")
                 break;
         }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
         message:0,
         data:error
     });
        next(error);
    }
};

exports.deletePayment=async(req,res,next)=>{
    try {
        const deletePayment=await
         Payment.destroy({
            where:{
                idx:req.body.idx
            }
        });
        const paymentJson=await((result)=>{
            res.json({
                message:"idx " +req.body.idx+ " deleted",
                data: result
            });
        });
        await paymentJson(deletePayment);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:0,
            data:error
        })
        next(error);
    };
    
};
