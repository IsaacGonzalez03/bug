import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(id) {
    return await dbContext.Note.find(id).populate('creator', 'name picture')
  }

  async createNote(body) {
    const newNote = await dbContext.Note.create(body)
    return newNote
  }

  async deleteNote(id, userId) {
    const data = await dbContext.Note.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) throw new BadRequest('Invalid Id')
  }
}

export const notesService = new NotesService()
