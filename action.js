import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        rating: 0
    }
}

function editComment(id, text) {
    return {
        type: ADD_COMMENT, // EDIT
        id,
        text
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb: add +1
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb: removed -1 
    }
}
// const boundREMOVE_COMMENT = text => dispatch(REMOVE_COMMENT(text));
// boundREMOVE_COMMENT('...');

// const boundEDIT_COMMENT = text => dispatch(EDIT_COMMENT(text));
// boundEDIT_COMMENT('...');

// const boundTHUMB_UP_COMMENT = id => dispatch(THUMB_UP_COMMENT(id));
// boundTHUMB_UP_COMMENT('...');

// const boundTHUMB_DOWN_COMMENT = id => dispatch(THUMB_DOWN_COMMENT(id));
// boundTHUMB_DOWN_COMMENT('...');
