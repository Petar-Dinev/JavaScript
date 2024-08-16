export const artGallery = {
  addArtwork(title, dimensions, artist) {
    if (typeof title !== "string" || typeof artist !== "string") {
      throw new Error("Invalid Information!");
    }
    if (!/^\d+ x \d+$/.test(dimensions)) {
      throw new Error("Invalid Dimensions!");
    }
    const validArtists = ["Van Gogh", "Picasso", "Monet"];
    if (!validArtists.includes(artist)) {
      throw new Error("This artist is not allowed in the gallery!");
    }

    return `Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`;
  },

  calculateCosts(exhibitionCosts, insuranceCosts, sponsor) {
    if (
      typeof exhibitionCosts !== "number" ||
      typeof insuranceCosts !== "number" ||
      typeof sponsor !== "boolean" ||
      exhibitionCosts < 0 ||
      insuranceCosts < 0
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = exhibitionCosts + insuranceCosts;
    if (sponsor) {
      totalPrice *= 0.9;
      return `Exhibition and insurance costs are ${totalPrice}$, reduced by 10% with the help of a donation from your sponsor.`;
    } else {
      return `Exhibition and insurance costs are ${totalPrice}$.`;
    }
  },

  organizeExhibits(artworksCount, displaySpacesCount) {
    if (
      typeof artworksCount !== "number" ||
      typeof displaySpacesCount !== "number" ||
      artworksCount <= 0 ||
      displaySpacesCount <= 0
    ) {
      throw new Error("Invalid Information!");
    }

    let artworksPerSpace = Math.floor(artworksCount / displaySpacesCount);

    if (artworksPerSpace < 5) {
      return `There are only ${artworksPerSpace} artworks in each display space, you can add more artworks.`;
    } else {
      return `You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`;
    }
  },
};

// export default artGallery;