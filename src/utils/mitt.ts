export type EventType = string | symbol
export type Handler<T = any> = (event: T) => void

export type EventHandlerList = Array<Handler>

export type EventHandlerMap = Map<EventType, EventHandlerList>

export interface EmitterMitt {
  all: EventHandlerMap
  on: (type: EventType, handler: Handler) => void
  emit: (type: EventType, event: any) => void
  off: (type: EventType, handler: Handler) => void
  clear: () => void
}

export default function mitt(all?: EventHandlerMap): EmitterMitt {
  all = all || new Map()
  return {
    all,
    on(type: EventType, handler: Handler) {
      const handlers = all?.get(type)
      const added = handlers && handlers.push(handler)
      if (!added)
        all?.set(type, [handler])
    },
    emit(type: EventType, event: any) {
      const handlers = all?.get(type)
      if (handlers) {
        (handlers as EventHandlerList).slice().forEach((handler) => {
          handler(event)
        })
      }
    },
    off(type: EventType, handler: Handler) {
      const handlers = all?.get(type)
      if (handlers)
        handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    },
    clear() {
      this.all.clear()
    },
  }
}
