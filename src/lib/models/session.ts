import mongoose from "mongoose"

export const SESSION_DURATION = "2d"

export interface ISession {
  createdAt: Date
  sessionId: string
  userId: mongoose.Types.ObjectId
}

const SessionSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    expires: SESSION_DURATION,
    default: Date.now,
  },
  sessionId: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
})
export function validateMatch(node: HTMLInputElement, repeatPasswordId: string) {
  const bothMatch = () => {
    const elem = document.getElementById(repeatPasswordId) as HTMLInputElement
    if (node.value !== elem.value) {
      node.setCustomValidity("Password does not match" + " " + elem.value + " " + node.value)
    }
  }
  node.addEventListener("change", bothMatch)
  return {
    destroy() {
      node.removeEventListener("change", bothMatch)
    },
  }
}
export const Session = mongoose.model<ISession>("Session", SessionSchema)
