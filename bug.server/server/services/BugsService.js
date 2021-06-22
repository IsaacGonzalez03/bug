import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAllBugs(query = {}) {
    const allBugs = await dbContext.Bug.find(query).populate('creator', 'name picture')
    return allBugs
  }

  async getBugById(id) {
    const bug = await dbContext.Bug.findById(id).populate('creator', 'name picture')
    if (!bug) throw new BadRequest('Invalid Id')
    return bug
  }

  async createBug(body) {
    return await dbContext.Bug.create(body)
  }

  async editBug(body) {
    const foundBug = await this.getBugById(body.id)
    // if (foundBug.creatorId !== body.creatorId) { throw new BadRequest('Invalid Id') }
    if (foundBug.closed === true) { throw new BadRequest('Bug closed') }
    const data = await dbContext.Bug.findOneAndUpdate({ _id: body.id, creatorId: body.creatorId }, body, { new: true })
    return data
  }

  async closeBug(id, userId) {
    const data = await dbContext.Bug.findOneAndUpdate({ _id: id, creatorId: userId, closed: false }, { closed: true }, { new: true })
    if (!data) throw new BadRequest('Invalid Id')
  }
}
export const bugsService = new BugsService()
