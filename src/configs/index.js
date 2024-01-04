import React from 'react';
import { Switch } from "react-native"
import * as IconsOutline from "react-native-heroicons/outline";
import { useToast } from "react-native-toast-notifications";

export const HOME = 'Home'
export const HOME_STACK = 'HomeStack'
export const CART_STACK = 'CartStack'
export const USER_STACK = 'UserStack'
export const FAVOURITE = 'Favourite'
export const CART = 'Cart'
export const PROFILE = 'Profile'
export const PRODUCT_DEATAIL = 'ProductDetail'
export const BORBER_STYLE = 'border'
export const PAYMENT_STATUS = 'PaymentStatus'
export const INFO_PAYMENT = 'BillingInformation'
export const CATEGORY_ITEMS = 'CategoryItens'
export const LOGIN = 'Login'
export const SIGNUP = 'Sigup'
export const Setting = [
    {
        name: 'Dark Mode',
        rightButton: <Switch />,
        icon: <IconsOutline.SunIcon color={'#000'} />,
        className: 'mb-10'
    },
    {
        name: 'Account Information',
        icon: <IconsOutline.InformationCircleIcon color={'#000'} />,

        className: 'mb-10'
    },
    {
        name: 'Password',
        icon: <IconsOutline.LockClosedIcon color={'#000'} />,

        className: 'mb-10'
    },
    {
        name: 'Order',
        icon: <IconsOutline.ShoppingBagIcon color={'#000'} />,

        className: 'mb-10'
    },
    {
        name: 'My Cards',
        icon: <IconsOutline.CreditCardIcon color={'#000'} />,
        className: 'mb-10'
    },
    {
        name: 'Wishlist',
        icon: <IconsOutline.HeartIcon color={'#000'} />,

        className: 'mb-10'
    },
    {
        name: 'Settings',
        icon: <IconsOutline.Cog8ToothIcon color={'#000'} />,
        className: 'mb-10'
    },
]




 export const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1608444265903-d7883082872b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
      name: 'Nike Sportswear Club Fleece',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL'],
      listImage : ['https://images.pexels.com/photos/16039646/pexels-photo-16039646/free-photo-of-woman-in-jeans-and-nike-socks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    },
  ]

 export const fashionBrands = [
    // {
    //   id: 1,
    //   name: 'Nike',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg',
    // },
    // {
    //   id: 2,
    //   name: 'Adidas',
    //   logo: 'https://cdn-copck.nitrocdn.com/WwybsgZzWtFojdWowVAajDJCKuMAXRVm/assets/images/optimized/rev-834f560/wp-content/uploads/2023/04/y-nghia-logo-adidas.jpg',
    // },
    // {
    //   id: 3,
    //   name: 'Gucci',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/2560px-1960s_Gucci_Logo.svg.png',
    // },
    // {
    //   id: 4,
    //   name: 'Louis Vuitton',
    //   logo: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/louis-vuitton-logo-design-template-78ffdfd5a7454ac656ed6782e551a9df_screen.jpg?ts=1651806671',
    // },
    // Add more brands and their logo URLs as needed
  ];

  export const SC = 'success'
  export const DG = 'danger'
  export const WN = 'warning'