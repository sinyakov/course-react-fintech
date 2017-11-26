export default store => next => action => {
  if (action.type === 'API_REQUEST') {
    return fetch(action.request.API + action.request.query, {
      method: action.request.method
    })
      .then(resp => resp.json())
      .then(data =>
        store.dispatch({
          type: action.call.success,
          payload: data
        })
      )
      .catch(err =>
        store.dispatch({
          type: action.call.fail
          // payload: err
        })
      );
  }
  return next(action);
};
