function myFunc() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
        request.send();
        request.onload = () => {
            if (request.status >=200) {
                console.log(JSON.parse(request.response));
            } else throw new Error(`Запрос не удался ошибка ${request.status}`)
        }
        let test = {
            name: 'Sergey',
            age: 28
        }
        const requestPost = new XMLHttpRequest();
        requestPost.open("POST", "https://jsonplaceholder.typicode.com/posts");

        requestPost.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
        requestPost.onload = () => {
            if (requestPost.status >= 200) {
                console.log(JSON.parse(requestPost.response));
            } else throw new Error(`Ошибка ${request.status}`)
        }
        requestPost.send(JSON.stringify(test));
    } catch (error) {
        console.log(error.message);
    }
}

myFunc()