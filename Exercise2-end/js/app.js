var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';
    console.log(`starting app`);

    let postsPromise = fetch(url + 'posts/')
        .then(response => response.json())
        .then(posts => nsp.posts = posts)
        .catch(err => console.log(`Problem retrieving posts: ${err}`));

    let commentsPromise = fetch(url + 'comments/')
        .then(response => response.json())
        .then(comments => nsp.comments = comments)
        .catch(err => console.log(`Problem retrieving comments: ${err}`));

    let todosPromise = fetch(url + 'todos/')
        .then(response => response.json())
        .then(todos => nsp.todos = todos)
        .catch(err => console.log(`Problem retrieving todos: ${err}`));

    Promise.all([postsPromise, commentsPromise, todosPromise])
        .then(() => {
            console.log(`finishing app`);
            console.log(`nsp:`, nsp);
        });

    //public
    return nsp;
})(MAINAPP || {})
console.log(`MAINAPP:`, MAINAPP);
