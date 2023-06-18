import React from "react";

const TreeList = (props) => {
  return (
    <>
      {props.trees.map((tree, index) => (
        <div class="card m-3" style={{width: "350px"}}>
          <img
            src={tree.default_image.thumbnail}
            class="card-img-top"
            alt={tree.other_name}
          ></img>
          <div class="card-body">
            <h5 class="card-title">Yaygın İsmi</h5>
            <p class="card-text">{tree.common_name}</p>
            <h5 class="card-title">Bilimsel İsmi</h5>
            <p class="card-text">{tree.scientific_name}</p>
            <h5 class="card-title">Döngü</h5>
            <p class="card-text">{tree.cycle}</p>
            <h5 class="card-title">Sulama</h5>
            <p class="card-text">{tree.watering}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TreeList;
