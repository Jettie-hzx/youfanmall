
import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutation-types"
export default  {
    addCart(context,payload){
      
     return new Promise((resolve)=>{
        let oldProduct=context.state.cartList.find(item=>item.iid==payload.iid)
        if(oldProduct){
          //oldProduct.count++
          context.commit(ADD_COUNTER,oldProduct)
          resolve("当前商品数量加1")
        }else{
          payload.count=1
          payload.isChecked=false
          context.commit(ADD_TO_CART,payload)
          resolve("添加了新的商品")
        }
        
        
     })
     
    }
  }