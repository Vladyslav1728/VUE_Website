import { defineStore } from "pinia"
import data from "@/data.json"

export const useDestinationsStore = defineStore("destinations", {
    state: () => ({
        destinations: data.destinations,
        currentDestination: null,
        currentExperience: null
    }),
    actions: {
        setDestinationBySlug(slug) {
            this.currentDestination =
                this.destinations.find(d => d.slug === slug)
        },
        setExperienceBySlug(experienceSlug) {
            if (!this.currentDestination) return
            this.currentExperience = this.currentDestination.experiences.find(e => e.slug === experienceSlug)
        }
    }
})