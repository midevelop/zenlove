// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

app.use(express.static(__dirname + "/public"));


// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
const PORT = process.env.PORT || 3000
app.listen(PORT);