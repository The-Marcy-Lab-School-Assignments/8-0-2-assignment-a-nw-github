import React, { useState, useEffect } from "react";
import { Image, ImageResponse, fetchSearch, fetchTrending } from "./utils";

const colors = {
  black: "navbar-inverse",
  white: "navbar-default",
};

function NavBar({ color, title }: { color: keyof typeof colors; title: string }) {
  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">{title}</div>
        </div>
      </div>
    </nav>
  );
}

function SearchBar({ callback }: { callback: (query: string) => void }) {
  const [query, setQuery] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.length) {
      return;
    }

    callback(query);
    setQuery("");
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

function GifDisplay({ gifs }: { gifs: Image[] }) {
  return (
    <ul>
      {gifs.map(({ id, images, title }) => {
        return (
          <li key={id}>
            <img alt={title} src={images.original.url} />
          </li>
        );
      })}
    </ul>
  );
}

export default function App() {
  const [gifs, setGifs] = useState<Image[]>([]);
  const [info, setInfo] = useState<string | undefined>();
  useEffect(() => void displayImageResponse(fetchTrending()), []);

  async function displayImageResponse(func: Promise<ImageResponse | undefined>) {
    setInfo("Loading...");
    const resp = await func;
    if (resp) {
      setGifs(resp.data);
      if (resp.data.length) {
        setInfo(undefined);
      } else {
        setInfo("No gifs found!");
      }
    } else {
      setInfo("Couldn't fetch gifs! Please try again later!");
    }
  }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <SearchBar callback={(q) => displayImageResponse(fetchSearch({ search: q }))} />
        <br />
        {info ? <h2>{info}</h2> : <GifDisplay gifs={gifs} />}
      </div>
    </div>
  );
}
