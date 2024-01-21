export function createCategory(category) {
    return new Promise(async (resolve) => {
      const response = await fetch(`/api/v1/categories/`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(category),
      })
      const data = await response.json()
      resolve({ data });
    }
    );
  }

export function createBrand(brand) {
    return new Promise(async (resolve) => {
      const response = await fetch(`/api/v1/brands/`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(brand),
      })
      const data = await response.json()
      resolve({ data });
    }
    );
  }