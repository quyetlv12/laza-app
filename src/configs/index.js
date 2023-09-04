import { Switch } from "react-native"
import * as IconsOutline from "react-native-heroicons/outline";

export const HOME = 'Home'
export const HOME_STACK = 'HomeStack'
export const FAVOURITE = 'Favourite'
export const CART = 'Cart'
export const PROFILE = 'Profile'
export const PRODUCT_DEATAIL = 'ProductDetail'
export const BORBER_STYLE = 'border'
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