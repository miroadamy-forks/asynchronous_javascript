var MAINAPP = (function(nsp) {
    "use strict";

    let posts = [],
        comments = [],
        todos = [];
    
    let url = 'https://jsonplaceholder.typicode.com/';

    fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));


    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */

    //public
    nsp.comments = comments;
    nsp.todos = todos;
    console.log('Just checking !');
    return nsp;
})(MAINAPP || {});