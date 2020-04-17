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

function createPost(post){ 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);// posts array ine yeni postları pushla-ekle
            
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Something went wrong! :(')
            }
        },1000);  
    });
} 

// Async / Await
// to use await inside of a function, function must be async function
//await just waits for an asyncronous process or action to complete

/* async function init() {
    await createPost({title: 'Post Three', body:'This is Post Three'}); // await this to be done until we move on getPosts
    getPosts();
}
init(); */

// Async / Await with Fetch
async function fetchUsers() {
    const rspnse = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await rspnse.json();
    console.log(data);
}

fetchUsers();