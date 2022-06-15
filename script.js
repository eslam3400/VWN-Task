let sum
let inputsCount
let unlimitedRewards
let lifetimeRewards

const calcSum = () => {
  const bills = parseInt(document.getElementById("bills").value)
  const ads = parseInt(document.getElementById("ads").value)
  const spends = parseInt(document.getElementById("spends").value)
  const project = parseInt(document.getElementById("project").value)

  if (bills >= 0) {
    sum += bills
    inputsCount++
  }
  if (ads >= 0) {
    sum += ads
    inputsCount++
  }
  if (spends >= 0) {
    sum += spends
    inputsCount++
  }
  if (project >= 0) {
    sum += project
    inputsCount++
  }
}

const calcSumForBrand = (selectedBrand) => {
  inputsCount = 0
  sum = 0
  unlimitedRewards = null
  lifetimeRewards = null

  calcSum()

  if ("Brex" == selectedBrand) sum *= .3
  if ("Stripe" == selectedBrand) sum *= 2.9
  if ("Amex" == selectedBrand) sum *= 1.3

  if (inputsCount == 4) {
    unlimitedRewards = sum * 1.1
    lifetimeRewards = sum * 1.2
  }

  document.getElementById("result-brand").innerText = selectedBrand + ": " || "sum"
  document.getElementById("result-sum").innerText = sum || ""
  document.getElementById("result-unlimited").innerText = unlimitedRewards || ""
  document.getElementById("result-lifetime").innerText = lifetimeRewards || ""

  console.log({ inputsCount, sum, unlimitedRewards, lifetimeRewards })
}