var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';
    console.log('About to start');
    fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(function(posts) { nsp.posts = posts; console.log("Posts:" +posts); return posts;})
    .catch(err => console.log(`Problem retrieving posts: ${err}`));


    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */

    //public
    console.log('Just checking !');
    return nsp;
})(MAINAPP || {});
console.log("MAIN:" + MAINAPP.posts);