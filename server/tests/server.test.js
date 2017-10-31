const expect = require('expect');
const request = require('supertest');
const {
    ObjectID
} = require('mongodb');

const {
    app
} = require('./../server');
const {
    Todo
} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo'
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = "First OG todo";

        request(app)
            .post('/todos')
            .send({
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({
                    text
                }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body', (done) => {
        request(app)
            .post('/todos')
            .send({
                text: ''
            })
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e))
            });
    });

    describe('GET /todos', () => {
        it('should get all todos', (done) => {
            request(app)
                .get('/todos')
                .expect(200)
                .expect((res) => {
                    expect(res.body.todos.length).toBe(2);
                })
                .end(done);
        });
    });
    describe('GET /todos/:id', () => {
        it('should return todo doc', (done) => {
            request(app)
                .get(`/todos/${todos[0]._id.toHexString()}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.todo.text).toBe(todos[0].text);
                })
                .end(done);
        });

        it('should return 404 if todo not found', (done) => {
            var newID = new ObjectID().toHexString();
            request(app)
                .get(`/todos/${newID}`)
                .expect(404)
                .end(done)
        });

        it('should return 404 for non object', (done) => {
            request(app)
                .get('/todos/123')
                .expect(404)
                .end(done)
        });
    });
    describe('DELETE /todo/:id', () => {
        it('should remove todo', (done) => {
            var hexId = todos[1]._id.toHexString();
            request(app)
                .delete(`/todos/${hexId}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.todo._id).toBe(hexId)
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    Todo.find({
                        id: hexId
                    }).then((todo) => {
                        expect(todo.length).toBe(0);
                        done();
                    }).catch((e) => done(e));
                });
        });

        it('should return 404 if todo not found', (done) => {
            var hexId = todos[1]._id.toHexString();
            request(app)
                .delete(`/todos/${hexId}`)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    Todo.find({
                        id: hexId
                    }).then((todo) => {
                        expect(404)
                        done();
                    });
                });

        });

        it('should return 404 if ID is invalid', (done) => {
            var hexId = todos[1]._id.toHexString();
            request(app)
                .delete(`/todos/${hexId}`)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    Todo.find({
                        id: '59f83b3195356b0f30a832a1'
                    }).then((todo) => {
                        expect(404)
                        done();
                    });
                });
        });
    });
});
