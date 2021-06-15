import * as request from './request';
import * as auth from './auth';
import * as user from './user';
import * as attribute from './attribute';
import * as tab from './tab';
import * as family from './family';
import * as plant from './plant';
import * as search from './search';
import * as post from './post';
import * as collection from './collection';
import * as contributor from './contributor';

const services = {
    request,
    auth,
    user,
    attribute,
    tab,
    family,
    plant,
    search,
    post,
    collection,
    contributor,
}

export default services;

export * from './auth'
export * from './user'
export * from './request'
export * from './attribute'
export * from './tab'
export * from './family'
export * from './plant'
export * from './search'
export * from './post'
export * from './collection'
export * from './contributor'