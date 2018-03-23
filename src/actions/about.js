import database from '../firebase/firebase';

export const setAbout = (content) => ({
    type: 'SET_ABOUT',
    content
});

export const startSetAbout = () => {
    return (dispatch) => {
        return database.ref(`about/content`).set();    
    }
};

export const editAbout = (updates) => {
    type: 'EDIT_ABOUT',
    updates
};

export const setEditAbout = () => {
    return (dispatch) => {
        return database.ref(`about/content`).set(dispatch(editAbout(updates)));
    }
};