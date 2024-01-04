import HttpClient from "../src/auth/Client"
const API_CART = '/carts'
export const CartService = {
    addToCart(data){
        return HttpClient.post(API_CART , data)
    },
    getProductInCart(){
        return HttpClient.get(API_CART , { params: { date: new Date().getMilliseconds() } })
    },
    deleteItemInCart(id){
        return HttpClient.delete(`${API_CART}/${id}`)
    },
    updateItemInCart(id , data){
        return HttpClient.put(`${API_CART}/${id}` , data)
    }
}