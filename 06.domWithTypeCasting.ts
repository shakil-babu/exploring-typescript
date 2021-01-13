

let select = document.querySelector('#serial') as HTMLSelectElement ;
let Name = document.querySelector('#name') as HTMLInputElement ;
let password =document.querySelector('#password') as HTMLInputElement ;
let form = document.querySelector('form') as HTMLFormElement ;


form.addEventListener('click',(e:Event) => {
    e.preventDefault();
    console.log(
        select.value,
        Name.value,
        password.value
    )
})


// create a html file
// and add with js file which will be ready after npm run build


