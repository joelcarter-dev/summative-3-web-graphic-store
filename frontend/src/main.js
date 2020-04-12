import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

import LandingPage from "./views/LandingPage"
import StoreItem from "./views/StoreItem"
import UserProfile from "./views/StoreItem"
import SignUp from "./views/SignUp.vue"
import LogIn from "./views/LogIn"

Vue.config.productionTip = false

// add fonts to fontawsome like this, after importing them
// import required font awesome icons and add them to the library
// library.add(faEdit, faTrashAlt, faArrowLeft, faArrowRight, faGithub, faLinkedin, faEnvelope, faChevronLeft)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

//vue router
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{
		path: "/login",
		component: LogIn,
		name: "login"
	},
	{
		path: "/signup",
		component: SignUp,
		name: "signup"
	},
	{
		path: "/",
		component: LandingPage,
		name: "home",
		props: true
	},
	{
		path: "/profile/:user",
		component: UserProfile,
		name: "profile",
		props: true
	},
	{
		path: "/item/:itemId",
		component: StoreItem,
		props: true,
		name: "project"
	}
]

const router = new VueRouter({
	routes,
	mode: "history"
})

new Vue({
	render: h => h(App),
	router
}).$mount("#app")
