package toolsPackage

import (
	"net/http"
	"os"
)

func EnableCorss(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// Function that returns the URL with the parameters necessaries for the conecction with Db
func GetUrl() string {
	user := os.Getenv("USER")
	pswd := os.Getenv("PASSWORD")
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	dbName := os.Getenv("DATABASE")

	url := user + ":" + pswd + "@tcp(" + host + ":" +
		port + ")/" + dbName +
		"?charset=utf8mb4&parseTime=True&loc=Local"

	return url
}
