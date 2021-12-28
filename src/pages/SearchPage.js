import React from "react";
import { useStateValue } from "../context/StateProvider";
import response from "../response";
import Search from ".././Search";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import "./searchPage.css";

import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = response;

  console.log(data, "tesla");
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searcgPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searcgPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searcgPage__option">
                <ImageIcon />
                <Link to="/images">lmages</Link>
              </div>
              <div className="searcgPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searcgPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searcgPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searcgPage__option">
                <Link to="/settingd">Setting</Link>
              </div>
              <div className="searcgPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults}
            results({data?.searchInformation.formattedSearchTime} seconds) for
            {term}{" "}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=" "
                    />
                  )}

                {item.displayLink}
              </a>

              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
