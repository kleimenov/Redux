export const createStore = (rootReducer, initialState) => {
  //implement closures and observer pattern and it will 

  let state = rootReducer(initialState, {type: '__INIT__'});
  const subscribers = [];

  return {
    dispatch(action) {
      //action = specific object {type: 'INCREMENT'}
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },

    subscribe(callback) {
      subscribers.push(callback);
    },

    getState() {
      return state;
    },
  };
};
