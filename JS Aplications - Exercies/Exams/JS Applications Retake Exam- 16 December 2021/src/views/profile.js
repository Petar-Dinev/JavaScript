import { getOwnTheaters } from "../api/data.js";
import { html } from "../lib.js";

const profileTemplate = (user, theaters) => html`<section id="profilePage">
  <div class="userInfo">
    <div class="avatar">
      <img src="./images/profilePic.png" />
    </div>
    <h2>${user.email}</h2>
  </div>
  <div class="board">
    <!--If there are event-->
    ${theaters.length > 0
      ? html`<div class="eventBoard">${theaters.map(theaterTemplate)}</div>`
      : html` <!--If there are no event-->
          <div class="no-events">
            <p>This user has no events yet!</p>
          </div>`}
  </div>
</section>`;

const theaterTemplate = (theater) => html`
  <div class="event-info">
    <img src="${theater.imageUrl}" />
    <h2>${theater.title}</h2>
    <h6>${theater.date}</h6>
    <a href="/${theater._id}" class="details-button">Details</a>
  </div>
`;

export async function showProfile(ctx) {
    const user = ctx.user;
  const theaters = await getOwnTheaters(ctx.user._id);
  ctx.render(profileTemplate(user, theaters));
}
