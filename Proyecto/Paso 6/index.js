fetch ("https://raw.githubusercontent.com/Adriana-Soteldo/PreEntrega1-Soteldo/main/movimiento.json")
.then(res => res.json())
.then(data => {
  const table = document.querySelector(".posicion-consolidada");
  const body = table.querySelector('tbody')
  for (let row of data) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)

    td1.innerHTML = row.id
    td2.innerHTML = row.fecha
    td3.innerHTML = row.movimiento
    td4.innerHTML = row.monto

    body.append(tr)
  }
})