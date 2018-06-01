import escapeRegExp from 'escape-string-regexp'

export const match_reading = new RegExp(escapeRegExp('currentlyReading'), 'i')
export const match_want_read = new RegExp(escapeRegExp('wantToRead'), 'i')
export const match_read = new RegExp(escapeRegExp('read'))
export const match_none = new RegExp(escapeRegExp('none'))