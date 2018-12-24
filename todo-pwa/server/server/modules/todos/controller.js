import TodoItem from './model';


const fetchItems = (req, res) => {
    const todoItem = TodoItem;
    todoItem.find({}, (err, data) => {
        if (err) {
            return res.status(err.status).send({
                err
            });
        } else {
            return res.status(200).send({
                data
            })
        }
    })
}

const addItem = (req, res) => {
    const todo = req.body.item
    console.log(todo);
    const todoItem = TodoItem({
        item: todo
    });
    todoItem.save((err) => {
        if (err) {
            console.log(err);
            return res.status(err.status).send(err);
        } else {
            return fetchItems(req, res);
        }
    });
}


const deleteItem = (req, res) => {
    const id = req.body.id;
    console.log(id);
    const todoItem = TodoItem;
    todoItem.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(err.status).send({err});
        } else {
            return fetchItems(req, res);
        }
    });
};  

export {
    fetchItems,
    addItem,
    deleteItem
};