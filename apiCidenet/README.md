# Api Cidenet

Api cidenet is a Golang API-REST connected to MySql Database

## Installation

In this API we used Golang 1.16 and MySql 5.7

First, you have to clone the repository

```bash
$ git clone https://github.com/cristian-bedoya/AppCidenet.git
```

### Configuration of Database

In this project, we are using general variables for user = `cidenet_user_db`, database = `api_cidenet_db`, password = `cidenet_pswd_db`, host = `localhost`, and port = `3306`.

If you want to modify these variables, Make sure to keep them!!

Now for creating a database run from path `../appCidenet/api_cidenet`

```bash
$ cat set_db_usr.sql | mysql -u root -p
```

### Execute the program

run the executable in the path `../appCidenet/api_cidenet`

```bash
$ HOST=localhost PORT=3306 USER=cidenet_user_dbDATABASE=api_cidenet_db PASSWORD=cidenet_pswd_db ./api_cidenet
```

## Usage

For this API were defined 5 endpoints [CRUD]

```bash
* GET     /api/employees             List all of employees
* POST    /api/employees             Create a new employee
* GET     /api/employees/{id_card}   Fetch an employee by his primary key (id_card)
* DELETE  /api/employees/{id_card}   Delete an employee by his primary key (id_card)
* PUT     /api/employees/{id_card}   Update an employee by his primary key (id_card)
```

All endpoints let CORS policy

## Authors

**GitHub:** [cristian-bedoya](https://github.com/cristian-bedoya)
**Twitter:** [@crisbedbla](https://twitter.com/crisbedbla)
