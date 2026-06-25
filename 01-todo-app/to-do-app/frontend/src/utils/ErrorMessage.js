export function getErrorMessage(err) {
  const msg = (err.response && err.response.data && err.response.data.message)
    || err.message
    || err.toString()
  return msg;
}

    