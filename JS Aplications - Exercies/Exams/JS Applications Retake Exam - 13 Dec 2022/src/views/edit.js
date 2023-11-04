import { getProductById, updateProduct } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (product, onEdit) => html` <section id="edit">
  <div class="form" @submit=${onEdit}>
    <h2>Edit Product</h2>
    <form class="edit-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Product Name"
        .value=${product.name}
      />
      <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
        .value=${product.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
        .value=${product.category}
      />
      <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value=${product.description}
      ></textarea>

      <input
        type="text"
        name="price"
        id="product-price"
        placeholder="Price"
        .value=${product.price}
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  const productId = ctx.params.id;
  const product = await getProductById(productId);
  console.log(productId);
  console.log(product);

  ctx.render(editTemplate(product, createSubmitHandler(onEdit)));

  async function onEdit({ name, imageUrl, category, description, price }) {
    if (
      name == "" ||
      imageUrl == "" ||
      category == "" ||
      description == "" ||
      price == ""
    ) {
      return alert("All fields are required!");
    }
    await updateProduct(productId, {
      name,
      imageUrl,
      category,
      description,
      price,
    });
    ctx.page.redirect("/catalog/" + productId);
  }
}
