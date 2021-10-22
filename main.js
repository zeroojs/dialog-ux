function showModal(modal) {
  modal = document.body.appendChild(modal)
  const timer = setTimeout(() => {
    modal.classList.add('is-show')
    addListeners(modal)
    clearTimeout(timer)
  }, 20)
}

function closeModal(modal) {
  modal.classList.remove('is-show')
  const timer = setTimeout(() => {
    modal.remove()
    clearTimeout(timer)
  }, 300)
}

function addListeners(modal) {
  // close btns
  const closeButtons = modal.querySelectorAll('.modal-close-button')
  closeButtons.forEach(c => c.addEventListener('click', closeModal.bind(null, modal)))
  // mask clicked close
  const modalMask = modal.querySelector('.modal-mask')
  modalMask.addEventListener('click', (e) => {
    e.stopPropagation()
    closeModal(modal)
  })
}

function init() {
  const modal = document.querySelector('.modal')
  modal.remove()
  return { modal }
}

function boostrap() {
  const { modal } = init()
  // open btn
  const openButton = document.querySelector('.open-modal-button')
  openButton.addEventListener('click', showModal.bind(null, modal))
}
boostrap()