package main

import (
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

type hero struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

var heroes = []hero{
	{Id: 12, Name: "Dr. Nice"},
	{Id: 13, Name: "Bombasto"},
	{Id: 14, Name: "Celeritas"},
	{Id: 15, Name: "Magneta"},
	{Id: 16, Name: "RubberMan"},
	{Id: 17, Name: "Dynama"},
	{Id: 18, Name: "Dr. IQ"},
	{Id: 19, Name: "Magma"},
	{Id: 20, Name: "Tornado"},
}

func getHeroes(c *gin.Context) {
	nameQuery := strings.ToLower(c.Query("name"))
	if nameQuery != "" {
		filteredByName := []hero{}
		for _, h := range heroes {
			if strings.Contains(strings.ToLower(h.Name), nameQuery) {
				filteredByName = append(filteredByName, h)
			}
		}
		c.IndentedJSON(http.StatusOK, filteredByName)
		return
	}

	c.IndentedJSON(http.StatusOK, heroes)
}

func addHero(c *gin.Context) {
	var newHero hero
	if err := c.BindJSON(&newHero); err != nil {
		return
	}
	if newHero.Id != 0 {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Must not provide ID!"})
		return
	}
	if len(heroes) == 0 {
		newHero.Id = 11
	} else {
		maxId := heroes[len(heroes)-1].Id
		newHero.Id = maxId + 1
	}
	heroes = append(heroes, newHero)
	c.IndentedJSON(http.StatusCreated, newHero)
}

func updateHero(c *gin.Context) {
	var updatedHero hero
	if err := c.BindJSON(&updatedHero); err != nil {
		return
	}
	for i, h := range heroes {
		if h.Id == updatedHero.Id {
			heroes[i] = updatedHero
			c.IndentedJSON(http.StatusOK, updatedHero)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"messsage": "hero not found!"})
}

func getHeroById(c *gin.Context) {
	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)
	for _, h := range heroes {
		if h.Id == id {
			c.IndentedJSON(http.StatusOK, h)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "hero not found!"})
}

func deleteHeroById(c *gin.Context) {
	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)
	for i, h := range heroes {
		if h.Id == id {
			heroes = append(heroes[:i], heroes[i+1:]...)
			c.IndentedJSON(http.StatusOK, h)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "hero not found!"})
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.Header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	router := gin.Default()
	router.Use(CORSMiddleware())
	router.GET("/api/heroes", getHeroes)
	router.POST("/api/heroes", addHero)
	router.PUT("/api/heroes", updateHero)
	router.GET("/api/heroes/:id", getHeroById)
	router.DELETE("/api/heroes/:id", deleteHeroById)
	router.Run("localhost:8080")
}
