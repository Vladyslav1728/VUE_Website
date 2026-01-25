import { defineStore } from "pinia" // функция из Pinia для создания Store
import data from "@/data.json"
import type { Destination, Experience } from "@/types/data"

export const useDestinationsStore = defineStore("destinations", {
    state: () => ({ // это данные компонента
        destinations: data.destinations as Destination[],
        currentDestination: null as Destination | null,
        currentExperience: null as Experience | null
    }),
    actions: {
        loadDestinations() {
            const saved = localStorage.getItem("destinations")
            if (saved) {
                this.destinations = JSON.parse(saved) // конвертация строки в json
            } else {
                this.destinations = data.destinations // взять данные из data и сохранить в store
                this.saveDestinations()
            }
        },
        saveDestinations() {
            localStorage.setItem("destinations", JSON.stringify(this.destinations)) // конвертация json в строку
            // (потому что можно передать только строку)
        },
        setDestinationBySlug(slug: string) {
            this.currentDestination = this.destinations.find(d => d.slug === slug) || null
        },
        setExperienceBySlug(experienceSlug: string) {
            if (!this.currentDestination) return
            this.currentExperience = this.currentDestination.experiences.find(e => e.slug === experienceSlug) || null
        }
        // если find нашел - обьект, если нет - undefined (но тут выведет null)
    }
})