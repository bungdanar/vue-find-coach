import { BACKEND_BASE_URL } from '@/utils'

export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId

    const coachData = {
      ...payload,
    }

    const response = await fetch(`${BACKEND_BASE_URL}/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    })

    if (!response.ok) {
      // MUST HANDLE ERROR
    }

    // const responseData = await response.json()

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    })
  },
  async loadCoaches(context) {
    const response = await fetch(`${BACKEND_BASE_URL}/coaches.json`)

    if (!response.ok) {
      // MUST HANDLE ERROR
      const error = new Error(responseData.message || 'Failed to fetch')
      throw error
    }

    const responseData = await response.json()

    const coaches = []
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      }
      coaches.push(coach)
    }

    context.commit('setCoaches', coaches)
  },
}
