## Проект СКАН

Посмотреть проект можно [Здесь](https://kivavlad.github.io/Scan-service/).

### Компания СКАН разработала новый API для поиска публикаций о компании (юридическом лице) в средствах массовой информации по его ИНН. Серверная часть приложения уже готова, ваша задача — разработать клиентскую часть.
ТЗ и начальный проект находятся [Здесь](https://9qr.de/n8fZl4)

### `Основные задачи`

**1. Сверстать необходимые части интерфейса. При необходимости вместо запрашиваемых данных можно временно использовать значения-заглушки.**

**2. Адаптировать свёрстанные страницы под мобильную версию.**

**3. Настроить роутинг и разделение прав: все страницы, кроме главной, должны быть доступны только зарегистрированному пользователю.**

**4. Подключить бэкенд-часть к фронтенду, настроить отправку запросов.**

**5. Отладить детали для гладкого UX (пользовательского опыта): добавить лоадеры, валидацию форм и оповещения.**


### `Основной сценарий работы приложения:`

**1. Открываем приложение (без авторизации) и попадаем на главную страницу.**

**2. Используя форму авторизации, заходим в аккаунт (POST account/login).**

**3. После успешной авторизации в фоновом режиме запрашиваются данные об аккаунте пользователя и выводятся в шапку страницы (GET account/info).**

**4. Переходим на страницу поиска и задаём параметры. Если параметры поиска введены корректно, получаем сводную информацию по количеству публикаций и рискам (POST objectsearch/histograms).**

**5. Параллельно, используя те же параметры, выполняем поиск непосредственно самих публикаций (POST objectsearch).**

**6. После успешного завершения запроса POST objectsearch получаем список ID публикаций и запрашиваем содержимое первых 10 публикаций (POST documents).**

**7. Если найденных публикаций больше 10, нажимаем на кнопку «Показать больше» и подгружаем следующие 10 публикаций.**
