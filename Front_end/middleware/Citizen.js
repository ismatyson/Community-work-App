export default function (context) {
    console.log('[Middleware] Citizen-Auth!')
      if(context.store.getters.loggedInUser.isibo._id !== 'undefined') {
        context.redirect('/Community/MyCommunity/'+ context.store.getters.loggedInUser.NationalId)
      }
}