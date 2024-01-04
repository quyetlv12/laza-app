import HttpClient from "../src/auth/Client"
const API = '/products'
export const ProductService = {
    // addToCart(data){
    //     return HttpClient.post(API , data)
    // },
    getProduct(){
        return HttpClient.get(API , { params: { date: new Date().getMilliseconds() } })
    },
    // deleteItemInCart(id){
    //     return HttpClient.delete(`${API}/${id}`)
    // },
    // updateItemInCart(id , data){
    //     return HttpClient.put(`${API}/${id}` , data)
    // }
}