import { getMyPosts } from "../api/data.js";
import { html } from "../lib.js";

const myPostsTemplate = (myPosts) => html` <section id="my-posts-page">
  <h1 class="title">My Posts</h1>

  <!-- Display a div with information about every post (if any)-->
  ${myPosts.length > 0
    ? html`<div class="my-posts">
        ${myPosts.map(
          (x) => html`<div class="post">
            <h2 class="post-title">${x.title}</h2>
            <img class="post-image" src="${x.imageUrl}" alt="Material Image" />
            <div class="btn-wrapper">
              <a href="/catalog/${x._id}" class="details-btn btn">Details</a>
            </div>
          </div>`
        )}
      </div>`
    : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

export async function showMyPosts(ctx) {
  const myPosts = await getMyPosts(ctx.user._id);
  ctx.render(myPostsTemplate(myPosts));
}
