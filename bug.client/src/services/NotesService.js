const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class NotesService {
  async getNotesByBugId(id) {
    const note = await api.get(`api/bugs/${id}/notes`)
    AppState.notes = note.data
  }

  async createNote(newNote, id) {
    await api.post('api/notes', newNote)
    this.getNotesByBugId(id)
  }

  async deleteNote(id, bugId) {
    await api.delete(`api/notes/${id}`)
    this.getNotesByBugId(bugId)
  }
}

export const notesService = new NotesService()
