const db = firebase.firestore();

export async function getItems() {
  try {
    let items = [];
    const response = await db.collection("categorias").get();

    response.forEach(function (item) {
      items.push(item.data());
    });

    return items;
  } catch (error) {
    throw new Error(error);
  }
}
