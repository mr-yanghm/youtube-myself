import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube //
      .search(query)
      .then((items) => setVideos(items));
  };

  useEffect(() => {
    youtube //
      .mostPopular()
      .then((items) => setVideos(items));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        <div>
          <VideoList videos={videos} />
        </div>
      </section>
    </div>
  );
}

export default App;
