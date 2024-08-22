document.getElementById("btn").addEventListener("click", async function() {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);

  function delayPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await delayPromise(delay);

  document.getElementById("output").innerText = text;
});
