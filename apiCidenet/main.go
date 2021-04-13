package main

import (
	"api_cidenet/model"
	"api_cidenet/toolsPackage"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Handler getting all employees in DB
func returnAllEmployes(w http.ResponseWriter, r *http.Request) {

	toolsPackage.EnableCorss(&w)
	employees := []model.Employee{}
	Db.Find(&employees)

	json.NewEncoder(w).Encode(employees)
}

// Handler for creating a New employee
func createNewemployee(w http.ResponseWriter, r *http.Request) {

	toolsPackage.EnableCorss(&w)
	reqBody, _ := ioutil.ReadAll(r.Body)

	var employee model.Employee

	json.Unmarshal(reqBody, &employee)

	if employee.Country == "colombia" {
		employee.Email = employee.Name + "." +
			strings.ReplaceAll(employee.LastName, " ", "") +
			"@cidenet.com.co"
	} else {
		employee.Email = employee.Name + "." +
			strings.ReplaceAll(employee.LastName, " ", "") +
			"@cidenet.com.us"
	}

	Db.Create(&employee)
	fmt.Println("Endpoint Hit: Creating New employee")
	json.NewEncoder(w).Encode(employee)

}

// Handler getting only one employees in DB
func returnSingleBooking(w http.ResponseWriter, r *http.Request) {

	toolsPackage.EnableCorss(&w)
	vars := mux.Vars(r)
	key := vars["id"]
	employees := []model.Employee{}
	Db.Find(&employees)
	for _, employee := range employees {
		// string to int

		if err == nil {
			if employee.IdNumber == key {
				fmt.Println(employee)
				fmt.Println("Endpoint Hit: Booking No:", key)
				json.NewEncoder(w).Encode(employee)
			}
		}
	}
}

// Handler for updating an employee
func updateEmployee(w http.ResponseWriter, r *http.Request) {
	//enableCors(&w)
	toolsPackage.EnableCorss(&w)
	vars := mux.Vars(r)
	key := vars["id"]

	employee := model.Employee{}

	Db.First(&employee, key)

	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&employee)

	if employee.Country == "colombia" {
		employee.Email = employee.Name + "." +
			strings.ReplaceAll(employee.LastName, " ", "") +
			"@cidenet.com.co"
	} else {
		employee.Email = employee.Name + "." +
			strings.ReplaceAll(employee.LastName, " ", "") +
			"@cidenet.com.us"
	}

	Db.Model(&employee).Updates(employee)

}

// Handler for deleting and employee
func deleteEmployee(w http.ResponseWriter, r *http.Request) {
	//enableCors(&w)
	toolsPackage.EnableCorss(&w)
	vars := mux.Vars(r)
	key := vars["id"]

	employee := model.Employee{}

	Db.Delete(&employee, key)
}

var Db *gorm.DB
var err error

func main() {

	//url := getUrl()
	url := toolsPackage.GetUrl()

	Db, err = gorm.Open(mysql.Open(url), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	} else {
		log.Println("Connection Established\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL-C.")
	}

	Db.AutoMigrate(&model.Employee{})

	router := mux.NewRouter()

	// endpoints
	router.HandleFunc("/api/employees", returnAllEmployes).Methods("GET")
	router.HandleFunc("/api/employees", createNewemployee).Methods("POST")
	router.HandleFunc("/api/employees/{id}", returnSingleBooking).Methods("GET")
	router.HandleFunc("/api/employees/{id}", updateEmployee).Methods("PUT")
	router.HandleFunc("/api/employees/{id}", deleteEmployee).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", router))
}
