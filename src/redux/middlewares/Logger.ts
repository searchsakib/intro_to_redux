const Logger = (state) => (next) => (action) => {
  console.log('Current State =>', state.getState());
  console.log('Action =>', action);
  next(action);
  console.log('Next State =>', state.getState());
  console.log('--------------------');
};

export default Logger;
