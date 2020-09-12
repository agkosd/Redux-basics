import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = (props) => {
  return (
    <div className="ui container">
      <h3>Details for:</h3>
      <p>
          Title:{props.selectedSong.title}
          <br/>
          Duration:{props.selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
