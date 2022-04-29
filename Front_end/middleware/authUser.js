export default function (context) {
    console.log('[Middleware] Admin-auth!')
      if(context.store.getters.loggedInUser.isAdmin) {
        context.redirect('/Leader/')
      }
}