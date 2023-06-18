import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TreeList from "./components/TreeList";
import TreeListHeading from "./components/TreeListHeading";
import SearchBox from "./components/SearchBox";

const apiKEY = `sk-hpeO648eef4ccec2b1306`;

var treeData = [];
let getTrees = async () => {
  var arrayData;
  var postUrl = "https://perenual.com/api/species-list?page=1&key=" + apiKEY;
  const data = await fetch(postUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  arrayData = await data.json();
  for (let item of arrayData.data) {
    treeData.push(item);
  }
};

function App() {
  //getTrees();
  //const [trees, setTrees] = useState(treeData);
  const [trees, setTrees] = useState([
    {
      id: 1,
      common_name: "European Silver Fir",
      scientific_name: ["Abies alba"],
      other_name: ["Common Silver Fir"],
      cycle: "Perennial",
      watering: "Frequent",
      sunlight: ["full sun"],
      default_image: {
        license: 45,
        license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
        license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        original_url:
          "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg",
        regular_url:
          "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg",
        medium_url:
          "https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg",
        small_url:
          "https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg",
        thumbnail:
          "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg",
      },
    },
    {
      id: 2,
      common_name: "Pyramidalis Silver Fir",
      scientific_name: ["Abies alba 'Pyramidalis'"],
      other_name: [],
      cycle: "Perennial",
      watering: "Average",
      sunlight: ["full sun"],
      default_image: {
        license: 5,
        license_name: "Attribution-ShareAlike License",
        license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
        original_url:
          "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
        regular_url:
          "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
        medium_url:
          "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
        small_url:
          "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
        thumbnail:
          "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg",
      },
    },
    {
      id: 3,
      common_name: "White Fir",
      scientific_name: ["Abies concolor"],
      other_name: ["Silver Fir", "Concolor Fir", "Colorado Fir"],
      cycle: "Perennial",
      watering: "Average",
      sunlight: ["Full sun", "part shade"],
      default_image: {
        license: 5,
        license_name: "Attribution-ShareAlike License",
        license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
        original_url:
          "https://perenual.com/storage/species_image/3_abies_concolor/og/52292935430_f4f3b22614_b.jpg",
        regular_url:
          "https://perenual.com/storage/species_image/3_abies_concolor/regular/52292935430_f4f3b22614_b.jpg",
        medium_url:
          "https://perenual.com/storage/species_image/3_abies_concolor/medium/52292935430_f4f3b22614_b.jpg",
        small_url:
          "https://perenual.com/storage/species_image/3_abies_concolor/small/52292935430_f4f3b22614_b.jpg",
        thumbnail:
          "https://perenual.com/storage/species_image/3_abies_concolor/thumbnail/52292935430_f4f3b22614_b.jpg",
      },
    },
    {
      id: 4,
      common_name: "Candicans White Fir",
      scientific_name: ["Abies concolor 'Candicans'"],
      other_name: ["Silver Fir", "Concolor Fir", "Colorado Fir"],
      cycle: "Perennial",
      watering: "Average",
      sunlight: ["full sun"],
      default_image: {
        license: 5,
        license_name: "Attribution-ShareAlike License",
        license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
        original_url:
          "https://perenual.com/storage/species_image/4_abies_concolor_candicans/og/49283844888_332c9e46f2_b.jpg",
        regular_url:
          "https://perenual.com/storage/species_image/4_abies_concolor_candicans/regular/49283844888_332c9e46f2_b.jpg",
        medium_url:
          "https://perenual.com/storage/species_image/4_abies_concolor_candicans/medium/49283844888_332c9e46f2_b.jpg",
        small_url:
          "https://perenual.com/storage/species_image/4_abies_concolor_candicans/small/49283844888_332c9e46f2_b.jpg",
        thumbnail:
          "https://perenual.com/storage/species_image/4_abies_concolor_candicans/thumbnail/49283844888_332c9e46f2_b.jpg",
      },
    },
    {
      id: 5,
      common_name: "Fraser Fir",
      scientific_name: ["Abies fraseri"],
      other_name: ["Southern Fir"],
      cycle: "Perennial",
      watering: "Frequent",
      sunlight: ["full sun", "part shade", "filtered shade"],
      default_image: {
        license: 4,
        license_name: "Attribution License",
        license_url: "https://creativecommons.org/licenses/by/2.0/",
        original_url:
          "https://perenual.com/storage/species_image/5_abies_fraseri/og/36843539702_e80fc436e0_b.jpg",
        regular_url:
          "https://perenual.com/storage/species_image/5_abies_fraseri/regular/36843539702_e80fc436e0_b.jpg",
        medium_url:
          "https://perenual.com/storage/species_image/5_abies_fraseri/medium/36843539702_e80fc436e0_b.jpg",
        small_url:
          "https://perenual.com/storage/species_image/5_abies_fraseri/small/36843539702_e80fc436e0_b.jpg",
        thumbnail:
          "https://perenual.com/storage/species_image/5_abies_fraseri/thumbnail/36843539702_e80fc436e0_b.jpg",
      },
    },
  ]);
  return (
    <div className="container-fluid">
      <div className="row d-flex align-item-center mt-4 mb-4">
        <TreeListHeading heading="Bitkiler" />
        <SearchBox />
      </div>
      <div className="row">
        <TreeList trees={trees} />
      </div>
    </div>
  );
}

export default App;
