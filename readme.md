# Суть и философия проекта
Нашей целью является создание инструмента, посредством которого, мы сможем заливать целевой бесплатный трафик на наши проекты.
Происходить это будет двумя способами:
1. Инвайтинг
2. Рассылка

Этапы работы:
- Подбираются чаты доноры, с которых будет собираться целевая аудитория
- Происходит парсинг АКТИВНОЙ(по ходу работы будем корректировать критерии, подходящие по определения АКТИВНАЯ) аудитории
- Инвайтинг в целевой чат/рассылка различных креативов

Интерфейсы взаимодействия с инструментом:
- телеграм бот
- веб сайт

Стек технологий: Django, DRF, React, Celery, Redis, Docker, Ngnix, Gunicorn

## Установка проекта

1. Сделать 
```git clone```
 через ssh. Важно сделать через ssh, чтобы каждый раз не вводить пароль
2. Установить docker и docker-compose по данным туториалам:
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-ru

3. Запустить сборку проекта командой 
```./bin/dev```
4. После успешной сборки, по адресу ```localhost``` должна появится главная страница проекта, также необходимо перейти по адресу ```localhost/api``` и 
```localhost/admin```, и убедиться что там есть django.
5. Перейти в папку frontend и запустить команду ```npm i```, запускаем локально, не в докере. Нужно, чтобы у вас на системе стоял nodejs. Ожидаем окончания установки всех пакетов, обычно это достаточно долго.
6. Запускаем фронт командой ```nmp start``` в папке frontend. Переходим на ```localhost:3000``` и убеждаемся, что проект работает. С фронтом мы будем работать по этому адресу, только тут он будет обновлятся при изменениях, на продакшн билд, по адресу ```localhost```, не обращаем внимание, это для прода. Он не будет меняться при изменениях в коде, только при перезапуске проекта.
7. Переходим на ```localhost:3000``` и нажимаем на кнопку логин, при логине у вас будет окно, где вам необходимо ввести telegram_id.
Реально telegram id не проверяется, так что можете вводить любой и логинится, каждый id - отдельный аккаунт.
На проде вместо поля ввода будет виджет login via telegram, там уже проверка идёт, под другим акком залогинится не удасться.
8. Вход в админ панель django осуществляется по адресу ```localhost/admin```, чтобы создать аккаунт, вам необходимо проделать следующие действия:
- Запускаем проект
- ```./bin/manage createsuperuser ```
- Вводим все запрашиваемые данные и логинимся.
10. По желанию установить себе alias для git.
```
[user]
        name = Имя Фамилия
        email = email
[alias]
    co = checkout
    cp = cherry-pick
    br = branch
    ci = commit
    st = status
    ap = add -p
    aa = add -A
    undo = reset --soft HEAD~1
    oneline = log --format=oneline
    set-upstream = !git branch --set-upstream-to=origin/git symbolic-ref --short HEAD
```

# Работа с проектом
- ```./bin/dev``` - запуск проекта
- ```./bin/lint``` - включение линтеров
- ```npm run lint``` - включение линтеров для фронта
- ```npm run lint:fix``` - автоисправление
- ```./bin/manage``` - алиас для команды python3 manage.py, принимает все аргументы
- ```./bin/shell``` - python3 shell внутри контейнера бэка
- ```./bin/debug``` - дебаг определенного контейнера, по сути просто подключает нас к контейнеру
- ```./bin/prod``` - НЕ ТРОГАТЬ!!! ЭТО ВЫКАТ ПРОЕКТА НА ПРОДАКШН

# Debug
Чтобы дебажить бэк прямо во время разработки, нам необходимо проделать следующие действия:
1. Открыть нужный нам файл и строку и вставить перед этой строкой ```import ipdb; ipdb.set_trace()```
2. Открыть новое окно в терминале и ввести ```./bin/debug```. Этот скрипт также принимает аргументы, поумолчанию он подключается к контейнеру backend, но если вы хотите дебажить другой контейнер, можете передать его имя в качестве аргумента

## Порядок разработки 
В ~20:00 с понедельника по пятницу через день происходит ежедневное обсуждение текущего статуса проекта, на планерке распределяются задачи, обсуждаются задачи в code review.
Также свои задачи вы можете увидеть в колонке "В работе" в trello.
Порядок выполнения задачи:
- Перетаскиваем задачу в колонку "В работе", если она ещё не там
- Создаем ветку с названием задачи на английском языке и переходим в неё
```
git branch название_ветки_на_английском
git checkout название_ветки_на_английском
```
- Реализуем задачу и запускаем линтеры командой 
```./bin/lint```
, если появляются какие то ошибки, то правим
- Покрываем тестами, реализованный функционал
Api покрываем unit тестами, фронт покрываем системными (пока тесты писать не будем, но в будущем начнём)
Также если реализуются какие то добавления или изменения в дизайн магазина, то сначала эти изменения необходимо согласовать в телеграм канале
- Называем коммит точно также, как называется карточка.
```git commit -m "название_задачи"```
- Делаем push и отправляем pull request на ci, убеждаемся, что все тесты на ci прошли. (пока ci нет, но скоро будет)
PR доллжен называться как карточка задачи.
- После того, как ci станет зеленым, прикрепляем к нашей карте в trello pull request из github и перемещаем карточку в колонку code review.
Также пишем в телеграм канале:"Прошу посмотреть ссылка_на_pr"
- Ожидаем обратную связь и если есть approve, то отправляем pr в master.
Важно! Коммит должен быть один и называться как карточка задачи.
Если есть комментарии по задаче, то правим их и снова отправляем карточку на ревью, решенные комменты помечаем как resolved, чтобы программист который смотрит задачу не обращал на них внимание.
После того, как задача окажется в mastere, необходимо перенести карточку в колонку master, на этом ваша задача выполнена.

## Распространенные ошибки
1. ```The container name "/backend_container" is already in use by container "c62279c1ad2ce9e2b56eed1a1204f9c53f93749f6b03d9aca5be3e0df30449b7". You have to remove (or rename) that container to be able to reuse that name.'```
- Необходимо ввести две эти команды и перезапустить проект.
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
2. ```django.db.migrations.exceptions.InconsistentMigrationHistory```
- Останавливаем проект
```
docker-compose -f docker-compose.dev.yml up --build --remove-orphans db
docker exec -it tg_money_manager_db_1 dropdb hello_django_dev -U hello_django
docker exec -it tg_money_manager_db_1 createdb hello_django_dev -U hello_django
```
- Останавливаем проект
- Запускаем весь проект через ```./bin/dev```
