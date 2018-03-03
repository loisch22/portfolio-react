const aboutDefault = "Content goes here";

export default (state = aboutDefault, action) => {
    switch(action.type) {
        case 'SET_ABOUT': 
          return action.content;
        case 'EDIT_ABOUT':
          return action.updates;
        default:
        return state;
    }
};