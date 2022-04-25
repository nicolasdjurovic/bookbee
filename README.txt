This is a project made by Nicolas Djurovic

Since Voyager admin doesnt include migrations and seeders you will need to do the following for every clone

1: create admin user
$ php artisan voyager:admin your@email.com --create

2: create a books database table and bread in voyager with the following columns
- name (varchar)
- description (longtext)
- image (image)

or used the bookbee2.dump file provided



