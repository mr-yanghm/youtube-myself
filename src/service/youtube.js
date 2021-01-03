"use strict";

const Youtube = function () {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  this.mostPopular = async function () {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAU1YyXdo8gO7kYc0Ypy0f66VBGja-8ofU",
      requestOptions
    );

    const result = await response.json();
    return result.items;
  };

  this.search = async function (query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAU1YyXdo8gO7kYc0Ypy0f66VBGja-8ofU`,
      requestOptions
    );
    const result = await response.json();
    const items = result.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  };
};

export default Youtube;
