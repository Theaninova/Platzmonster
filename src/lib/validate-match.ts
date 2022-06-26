export function validateMatch(node: HTMLInputElement, repeatPasswordId: string) {
  const bothMatch = () => {
    const elem = document.getElementById(repeatPasswordId) as HTMLInputElement

    if (node.value !== elem.value) {
      node.setCustomValidity("Password does not match" + " " + elem.value + " " + node.value)
    } else {
      node.setCustomValidity("")
    }
  }

  node.addEventListener("input", bothMatch)

  return {
    destroy() {
      node.removeEventListener("input", bothMatch)
    },
  }
}
