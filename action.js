// import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundREMOVE_COMMENT = text => dispatch(REMOVE_COMMENT(text));
boundREMOVE_COMMENT('...');

const boundEDIT_COMMENT = text => dispatch(EDIT_COMMENT(text));
boundEDIT_COMMENT('...');

const boundTHUMB_UP_COMMENT = id => dispatch(THUMB_UP_COMMENT(id));
boundTHUMB_UP_COMMENT('...');

const boundTHUMB_DOWN_COMMENT = id => dispatch(THUMB_DOWN_COMMENT(id));
boundTHUMB_DOWN_COMMENT('...');

