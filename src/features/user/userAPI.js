export function fetchLoggedInUserOrders({pagination}) {
  let queryString = '';
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(`/api/v1/orders?` + queryString)
    const data = await response.json()
    const totalOrders = await response.headers.get('X-Total-Count')
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  }
  );
}
export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch(`/api/v1/users/`)
    const data = await response.json()
    resolve({ data });
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('/api/v1/users/', {
      method: "PATCH",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(update),
    })
    const data = await response.json()
    resolve({ data })
  }
  );
}