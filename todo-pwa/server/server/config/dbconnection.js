import mongoose from 'mongoose';

export default () => {
    mongoose.connect('mongodb://localhost/todo-react', {useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    mongoose.connection
        .on('err', err => console.log(err))
        .once('open', () => console.log('mongodb started successfully'));
}