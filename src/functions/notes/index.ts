import { handlerPath } from '@libs/handler-resolver';

export const createNote = {
    handler: `${handlerPath(__dirname)}/handler.createNote`,
    events: [{
            http: {
                method: 'post',
                path: 'note',
            },
    }],
};

export const getNote = {
    handler: `${handlerPath(__dirname)}/handler.getNote`,
    events: [{
            http: {
                method: 'get',
                path: 'note/{id}',
            },
    }],
};

export const updateNote = {
    handler: `${handlerPath(__dirname)}/handler.updateNote`,
    events: [{
            http: {
                method: 'put',
                path: 'note/{id}',
            },
    }],
};

export const deleteNote = {
    handler: `${handlerPath(__dirname)}/handler.deleteNote`,
    events: [{
            http: {
                method: 'delete',
                path: 'note/{id}',
            },
    }],
};