import express from 'express';
import Example from './Example';
import Auth from './Auth';
import Plant from './Plant';
import Post from './Post';


const router = express.Router();

const registerRoute = (routes: any, obj: any) => {
  Object.keys(obj).forEach((key) => {
    const split = key.split(' ');
    const method = split[0].toLowerCase();
    const url = split[1];
    routes[method](url, obj[key]);
  });
};

registerRoute(router, Example);
registerRoute(router, Auth);
registerRoute(router, Plant);
registerRoute(router, Post);



export default router;
