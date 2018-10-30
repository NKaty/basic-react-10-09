## Прохождение курса React.js на http://learn.javascript.ru

Домашние задания выполнялись в отдельных ветках (hometask1, hometask2 и т.д.).

##### Задание № 1
1. Починить закрытие статьи
2. Подключить календарь(https://github.com/gpbl/react-day-picker) с выбором диапазона дат, отображать этот диапазон текстом
3. Реализовать список комментариев к статье, открывать/закрывать по нажатию на кнопку(менять на ней текст)
4. Вынести функционал открытия/закрытия в декоратор

##### Задание № 2
1. Анимировать список комментариев
2. Написать тесты на список комментариев
3. Написать для всего propTypes
4. Написать тест на закрытие статьи

##### Задание № 3
1. Вынести состояние фильтров в стор
2. Показывать в ArticleList только отфильтрованные статьи 

##### Задание № 4
1. Реализовать форму для добавления комментария в CommentList (user, text).
2. Переписать articles аналогично comments (id -> article)
3. Реализовать мидлвару для генерации случайных id
4. Реализовать добавление комментария к статье

##### Задание № 5
1. Реализовать загрузку комментов к статье при открытии списка(/api/comment?article=56c782f18990ecf954f6e027)
2. Показывать лоадер при загрузке, загружать комменты только при первом открытии

##### Задание № 6
1. Починить баг при переходе сразу на страницу статьи
2. Реализовать страницу для пагинации ВСЕХ комментариев(/api/comment?limit=5&offset=10), загружать каждую страницу один раз

##### Задание № 7
1. Реализовать локализацию(en/ru), хранить словарь в контексте
