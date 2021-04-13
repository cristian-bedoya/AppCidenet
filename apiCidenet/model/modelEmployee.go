// Model to represent employees and field in DB.
package model

import (
	"time"
)

type Employee struct {
	IdNumber       string    `json:"id_number" gorm:"primary_Key; size:20"`
	LastName       string    `json:"last_name" gorm:"size:20; not null"`
	SecondLastName string    `json:"second_last_Name" gorm:"size:20"`
	Name           string    `json:"name" gorm:"size:20; not null"`
	OtherName      string    `json:"other_name" gorm:"size:50"`
	Country        string    `json:"country" gorm:"size:20; not null"`
	IdType         string    `json:"id_type" gorm:"size:20; not null"`
	Email          string    `json:"email" gorm:"size:300; unique"`
	AdmissionDate  time.Time `gorm:"autoCreateTime"`
	Area           string    `json:"area" gorm:"size:20; not null"`
	Status         string    `json:"status" gorm:"size:20; default:active"`
	CreatedAt      time.Time `gorm:"autoCreateTime"`
}
