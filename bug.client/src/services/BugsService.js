const { AppState } = require('../AppState')
const { router } = require('../router')
const { api } = require('./AxiosService')

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async filterBugs() {
    AppState.bugs = AppState.bugs.filter(b => b.closed === false).reverse()
  }

  async getBugById(id) {
    const bug = await api.get(`api/bugs/${id}`)
    AppState.activeBug = bug.data
  }

  async createBug(newBug) {
    const res = await api.post('api/bugs', newBug)
    this.getAllBugs()
    router.push({ name: 'BugDetailsPage', params: { id: res.data.id } })
  }

  async deleteBug(id) {
    await api.delete(`api/bugs/${id}`)
    this.getBugById(id)
    this.getAllBugs()
  }

  async editBug(bugEdit) {
    delete bugEdit.closed
    await api.put(`api/bugs/${bugEdit.id}`, bugEdit)
    this.getBugById(bugEdit.id)
  }
}

export const bugsService = new BugsService()
