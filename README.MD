Step by step for running this API:
1) Go into project directory
2) Typing npm install on your terminal/cli and press enter
3) Create database on MySQL with using name's blog_db
4) Open file database.ts in src\config and change value of username field and value of password field that's according with your setting
5) Finally, typing npm run dev on your terminal/cli and press enter for running this API, if you want to run unit testing so you can type npm test

For Accessing API (You can use postman):

1) GET Method: http://localhost:5000/api/article/list

2) POST Method: http://localhost:5000/api/article/create
   body request sample: 
    {
     "title":"Title Sample",
     "content": "Content Sample"
    }

3) PUT Method: http://localhost:5000/api/article/update/{article_id}
   body request sample: 
    {
     "title":"Title Sample is updated",
     "content": "Content Sample is updated"
    }

4) DELETE Method: http://localhost:5000/api/article/delete/{article_id}