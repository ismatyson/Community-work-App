export default function (context) {
    console.log('[Middleware] MyCitizens-Auth!')
    context.store.dispatch('getMyIsibo')
      if(context.store.getters.loggedInUser.isibo._id !== 'undefined' && context.store.getters.isibo.PeopleJoined > 0) {
        context.redirect('/Leader/Citizens/' + context.store.getters.isibo._id)
      }else{
        context.redirect('/Leader/')
      }
}