import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloworld(request: Request, response: Response) {
    const user = createUser({
        email: 'lucas@gmail.com',
        password: '123456',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 100}
        ],
    });

    return response.json({ message: 'Hello World'});
}


