import EventEmitter from 'wolfy87-eventemitter'

export const dispatcher = new EventEmitter()

export function emit (event, args) {
  dispatcher.emit(event, args)
}
