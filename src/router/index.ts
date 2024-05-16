import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/pages/StartPage.vue'),
		},
		{
			path: '/series',
			name: 'Серия',
			component: () => import('@/components/MainLayout.vue'),
			meta: { name: 'series', title: 'Лямбда карусель', transition: 'slide-left' },
			children: [
				{
					path: '',
					name: 'Серия',
					meta: {name: 'series', title: 'Лямбда карусель серии', transition:'slide-left' },
					component: () => import('@/pages/SeriesPage.vue')
				}
			]
		},
		{
			path: '/size',
			name: 'Размер',
			component: () => import('@/components/MainLayout.vue'),
			meta: { name: 'size', title: 'Лямбда Размер', transition: 'slide-left' },
			children: [
				{
					path: '',
					name: 'Размер',
					meta: {name: 'size', title: 'Лямбда Размер', transition: 'slide-left' },
					component: () => import('@/pages/SizePage.vue')
				}
			]
		},
		{
			path: '/case',
			name: 'Кейсы',
			component: () => import('@/components/MainLayout.vue'),
			meta: {  name: 'case', title: 'Лямбда Кейсы', transition: 'slide-left' },
			children: [
				{
					path: '',
					name: 'Кейсы',
					meta: { name: 'case', title: 'Лямбда кейсы', transition: 'slide-left' },
					component: () => import('@/pages/CasePage.vue')
				}
			]
		},
		{
			path: '/bands',
			name: 'Ремешки',
			component: () => import('@/components/MainLayout.vue'),
			meta: { name: 'band', title: 'Лямбда Ремешки', transition: 'slide-left' },
			children: [
				{
					path: '',
					name: 'Ремешки',
					meta: {name: 'band', title: 'Лямбда карусель', transition: 'slide-left' },
					component: () => import('@/pages/BandPage.vue')
				}
			]
		}
	]
})

export default router
