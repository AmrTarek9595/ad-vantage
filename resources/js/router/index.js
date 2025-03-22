import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/pages/user/en/Userhome.vue';
import ARHome from '../components/pages/user/ar/Userhome.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
       
    },
 
       {
        path: '/ar',
        name: 'HomeAR',
        component: ARHome,
       
    },     
    // Add other routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
// router.beforeEach((to, from, next) => 
//     { 
//         if (localStorage.getItem('type')=="user" ||localStorage.getItem('type')=="User") { 

//                 const restrictedPaths = ['/','/analytics', '/newQuiz','/DisplayAllQuizs','/newuser','/DisplayAllUsers']; 
//                 if (restrictedPaths.includes(to.path)) { 
//                     next(false); 
//                     window.location.href="/user"
//                     } 
//                     else 
//                     { 
//                         next();
                        
//                     } } 
//         else { 
//             next(); 
//         }
//     }
// );// Allow navigation if URL doesn't contain /user

export default router;
