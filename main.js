function showdialog(dialog) {
  dialog.removeAttribute('style')
  const timer = setTimeout(() => {
    dialog.classList.add('is-show')
    clearTimeout(timer)
  }, 20)
}

function closedialog(dialog) {
  dialog.classList.remove('is-show')
  const timer = setTimeout(() => {
    dialog.setAttribute('style', 'display:none')
    clearTimeout(timer)
  }, 300)
}

function boostrap() {
  const dialog = document.querySelector('.dialog')
  // open btn
  const openButton = document.querySelector('.open-dialog-button')
  openButton.addEventListener('click', showdialog.bind(null, dialog))

  // close btns
  const closeButtons = dialog.querySelectorAll('.dialog-close-button')
  closeButtons.forEach(c => c.addEventListener('click', closedialog.bind(null, dialog)))
  
  // mask clicked close
  const dialogMask = dialog.querySelector('.dialog-modal')
  dialogMask.addEventListener('click', (e) => {
    e.stopPropagation()
    closedialog(dialog)
  })
}
boostrap()