import { ReactElement } from 'react';
interface SideBarTypes{
    name:string;
    path:string;
    icon:ReactElement
    activeIcon:ReactElement
}

import Dashboard from '@/public/assets/dashboard.svg'
import DashboardActive from '@/public/assets/dashboard_blue.svg'
import Qr from '@/public/assets/qr.svg'
import QrActive from '@/public/assets/qr_blue.svg'
import AddUser from '@/public/assets/add_user.svg' 
import AddUserActive from '@/public/assets/add_user_blue.svg' 
import Settings from '@/public/assets/settings.svg'
import SettingsActive from '@/public/assets/settings_blue.svg'
import Users from '@/public/assets/users.svg'
import UsersActive from '@/public/assets/users_blue.svg'

export const sideBarData:SideBarTypes[]=[
    {
        name:"Dashboard",
        path:'/',
        icon:Dashboard,
        activeIcon:DashboardActive
    },
    {
        name:"Generate Qr",
        path:'/generate-qr',
        icon:Qr,
        activeIcon:QrActive
    },
    {
        name:"Add User",
        path:'/add-user',
        icon:AddUser,
        activeIcon:AddUserActive
    },
    {
        name:"Users",
        path:'/users',
        icon:Users,
        activeIcon:UsersActive
    },
    {
        name:"Settings",
        path:'/settings',
        icon:Settings,
        activeIcon:SettingsActive
    }
]

