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
} // we not gonna use callback, instead we'll return a promise

/* createPost({title: 'Post Three', body:'This is Post Three'})
// this returns promise no need to add ,callback
.then(getPosts)
.catch(error => console.log(error)); */ // pass error in console rather than uncaught error
// e callback daha basitmiş aq ancak librariler databaseler promise ile çalışıyor.
// şimdi 15:28 promise.all a bakacağız ki gereksiz . .işleriyle uğraşmayalım.

//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=> setTimeout(resolve,2000,'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// takes in an array of promises
Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));


