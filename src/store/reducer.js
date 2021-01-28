import image from '../assets/images/product/8.jpg' 
export const initailState={
     basket:[{
          id:80,
          title :'The new game is here',
          price:10,
          rating:5,
          image:image
     }],
     user:null
}; 

const reducer=(state,action)=>{
     console.log(action);
     switch (action.type) {
          case 'ADD_TO_BASKET':
               return {
                    ...state,
                    basket:[...state.basket,action.item]
               };
          case 'REMOVE_FROM_BASKET':
               let newBasket=[...state.basket];
               const index=state.basket.findIndex((basketItem)=>basketItem.id==action.id);
               if(index>=0){
                    //item exist then reomove it
                    newBasket.splice(index,1);

               }else{
                    console.warn(`cant romve proudct as ${action.id} not exist`)
               }
               return {
                    ...state,
                    basket:newBasket
               };
          case 'ADD_USER':
               return {
                    ...state,
                    user: action.user
                  }                 
          default:
               return state;
     }
}

export default reducer;