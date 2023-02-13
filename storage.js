/* set input value in localStorage on input */
function setLocale(e) {
  if (e.value != null) {
      localStorage.setItem(e.name, e.value);
  }
}

