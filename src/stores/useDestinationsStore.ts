import { defineStore } from "pinia"
import data from "@/data.json"
import type { Destination, Experience } from "@/types/data"

export const useDestinationsStore = defineStore("destinations", {
    state: () => ({
        destinations: data.destinations as Destination[],
        currentDestination: null as Destination | null,
        currentExperience: null as Experience | null
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
        setDestinationBySlug(slug: string) {
            this.currentDestination = this.destinations.find(d => d.slug === slug) || null
        },
        setExperienceBySlug(experienceSlug: string) {
            if (!this.currentDestination) return
            this.currentExperience = this.currentDestination.experiences.find(e => e.slug === experienceSlug) || null
        }
    }
})