import { defineStore } from "pinia"
import data from "@/data.json"

export const useDestinationsStore = defineStore("destinations", {
    state: () => ({
        destinations: data.destinations,
        currentDestination: null,
        currentExperience: null
    }),
    actions: {
        loadDestinations() {
            const saved = localStorage.getItem("destinations")
            // проверка есть ли данные в LocalStorage
            if (saved) {
                this.destinations = JSON.parse(saved)
            } else {
                this.destinations = data.destinations
                this.saveDestinations()
            }
        },
        saveDestinations() {
            localStorage.setItem(
                "destinations",
                JSON.stringify(this.destinations)
            )
        },
        setDestinationBySlug(slug) {
            this.currentDestination =
                this.destinations.find(d => d.slug === slug) || null
        },
        setExperienceBySlug(experienceSlug) {
            if (!this.currentDestination) return
            this.currentExperience = this.currentDestination.experiences.find(e => e.slug === experienceSlug) || null
        }
    }
})