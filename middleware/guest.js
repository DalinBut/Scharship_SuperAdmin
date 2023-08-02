// export default function ({ store, redirect }) {
//     // Check if the user is authenticated
//     if (store.state.auth.loggedIn) {
//       // User is already logged in, redirect to home page or any other route
//       return redirect('/dashboard');
//     }
//   }
export default defineNuxtRouteMiddleware (({ app, redirect }) =>{
  const token = localStorage.getItem('store_token');

  if (!token) {
    // Redirect to the login page if the token is null or undefined
    return navigateTo('/login');
  } else {
    // Redirect to the dashboard page if the token is present
    // return redirect('/dashboard');
    return navigateTo(to.fullPath);
  }
});

// export default defineNuxtRouteMiddleware((to, from) => {
//   if (to.params.id === '1') {
//     return abortNavigation()
//   }
//   if (to.path !== '/') {
//     return navigateTo('/')
//   }
// })
