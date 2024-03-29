export async function getProductList(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products/${id}`
  );
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function getfeatureList() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/featured_products`
  );
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}
