import Index from './view/index'
import Tags from './view/tags'
import Details from './view/details'
import Details1 from './view/details1'

export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/tags',
        component: Tags
    },
    {
        path: '/detail',
        component: Details
    },
    {
        path: '/detail1',
        component: Details1
    }
]
