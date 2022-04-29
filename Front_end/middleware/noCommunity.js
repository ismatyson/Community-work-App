export default function (context) {
    console.log('[Middleware] Community-Auth!')
      if(context.store.getters.loggedInUser.isibo._id !== 'undefined') {
        context.redirect('/Leader/MyIsibo/'+ context.store.getters.loggedInUser.NationalId)
      }
}