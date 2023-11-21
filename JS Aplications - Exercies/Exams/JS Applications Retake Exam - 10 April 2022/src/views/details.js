import { deletePost, getPostById } from "../api/data.js";
import { getMyDonates, getPostDonations, makeDonate } from "../api/donate.js";
import { html } from "../lib.js";

const detailsTemplate = (
  post,
  canDonate,
  user,
  owner,
  postDonations,
  onDelete,
  onDonate
) => html` <section id="details-page">
  <h1 class="title">Post Details</h1>

  <div id="container">
    <div id="details">
      <div class="image-wrapper">
        <img src="${post.imageUrl}" alt="Material Image" class="post-image" />
      </div>
      <div class="info">
        <h2 class="title post-title">${post.title}</h2>
        <p class="post-description">Description: ${post.description}</p>
        <p class="post-address">Address: ${post.address}</p>
        <p class="post-number">Phone number: ${post.phone}</p>
        <p class="donate-Item">Donate Materials: ${postDonations}</p>

        <!--Edit and Delete are only for creator-->
        ${user
          ? html` <div class="btns">
              ${owner
                ? html` <a href="/edit/${post._id}" class="edit-btn btn"
                      >Edit</a
                    >
                    <a @click=${onDelete} class="delete-btn btn">Delete</a>`
                : html`${!canDonate
                    ? html`<a
                        @click=${onDonate}
                        href="javascript:void(0)"
                        class="donate-btn btn"
                        >Donate</a
                      >`
                    : ""}`}
            </div>`
          : ""}
      </div>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const postId = ctx.params.id;
  const post = await getPostById(postId);
  const postDonations = await getPostDonations(postId);
  const user = ctx.user;
  const owner = post._ownerId === user?._id;
  let userDonates = 0;
  if (user) {
    userDonates = await getMyDonates(postId, user._id);
  }
  const canDonate = user && userDonates;
  console.log(postId);
  console.log(post);
  console.log(postDonations);
  console.log(user);
  console.log(owner);
  console.log(userDonates);
  ctx.render(
    detailsTemplate(
      post,
      canDonate,
      user,
      owner,
      postDonations,
      onDelete,
      onDonate
    )
  );

  async function onDelete() {
    const choice = confirm("Are u sure");
    if (choice) {
      await deletePost(postId);
      ctx.page.redirect("/catalog");
    }
  }

  async function onDonate() {
    try{
      await makeDonate(postId);
      ctx.page.redirect("/catalog/" + postId);
    } catch(err) {
      return alert(err.message)
    }
  }
}
