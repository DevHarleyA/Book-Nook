const updateProgress = document.getElementsByClassName("apple")
const remove = document.getElementsByClassName("exx")

Array.from(updateProgress).forEach(function (element) {
  element.addEventListener('click', function () {
    let title = this.parentNode.childNodes[1].childNodes[1].innerText
    console.log(title)
    let progress = Number(this.parentNode.childNodes[9].childNodes[1].innerText)
    console.log(progress)


    fetch('books', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'title': title,
        'progress': progress
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  })
})

Array.from(remove).forEach(function (element) {
  element.addEventListener('click', function () {
    let title = this.parentNode.childNodes[1].childNodes[1].innerText
    console.log(title)

    fetch('deleteBook', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'title': title,
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
})