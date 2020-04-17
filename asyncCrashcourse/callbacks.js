const posts = [ //create two posts
    {title:'Post One', body: 'This is post one'},
    {title:'Post One', body: 'This is post one'}
];
// purpose is get from server and put them on a webpage.
function getPosts(){ 
    setTimeout(() => {  //mimicing a server 
        let output = ''; //just init. it to nothing 
        posts.forEach((post, index)=>{ //loop thru posts
          output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
// for loop is also okay but we use high order foreach loop
    }, 1000); // mimic delay 
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);// posts array ine yeni postları pushla-ekle
        callback();
    },1000); //total 2sec.
}

createPost({title: 'Post Three', body:'This is Post Three'}, getPosts);