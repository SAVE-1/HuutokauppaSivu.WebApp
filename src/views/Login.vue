<template>
    <div class="wrapper">
        <h2>Login</h2>
        <form action="return getItems(this)" class="login-form">
            <input type="text" placeholder="Username" name="search">
            <input type="password" placeholder="Password" name="search">
            <input type="submit" value="Submit">
        </form>
    </div>

    <button @click="getItems">get Items</button> <br> <br>
    <button @click="getThings">get Things</button> <br> <br>
    <button @click="postNew">post New</button>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            items: null,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        async getItems() {
            this.posts = await axios(
                {
                    method: 'post',
                    url: 'https://localhost:7266/login?useCookies=true&useSessionCookies=true',
                    data: {
                        "email": "s@s.com",
                        "password": "Seppo123!",
                        "twoFactorCode": "string",
                        "twoFactorRecoveryCode": "string"
                    },
                    headers: {
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "allow": "POST"
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    console.log(this.items);
                    console.log(res);
                })
                .catch((err) => console.error(err));
        },
        async getThings() {
            this.posts = await axios(
                {
                    method: 'get',
                    url: 'https://localhost:7266/MagicalItems?skip=0&take=50',
                    data: {"a": 1 },
                    headers: {
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        "allow": "POST"
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    console.log(this.items);
                })
                .catch((err) => console.error(err));
        },
        async postNew() {
            this.posts = await axios(
                {
                    method: 'post',
                    url: 'https://localhost:7266/MagicalItems/NewPosting?price=1&name=1&description=1',
                    withCredentials: true,
                    data: [ "gun" ],
                    headers: {
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/json",
                        "accept": "*/*",
                        "allow": "POST",
                        "Access-Control-Allow-Origin": "http://localhost:8080",
                        'Cookie': document.cookie
                    },
                    body: {

                    }
                })
                .then((res) => {
                    console.log(res.data);
                    console.log(this.items);
                })
                .catch((err) => console.error(err));
        }
    }
}

</script>


<style>
input[type=text],
input[type=password],
select {
    width: 10%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

input[type=submit] {
    width: 10%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
