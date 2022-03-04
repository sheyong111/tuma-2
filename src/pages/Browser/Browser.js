import React from "react";
import InnerCard from "../components/InnerCard/InnerCard";
import BrowserResultTable from "./comps/BrowserResultTable/BrowserResultTable";
import BrowserTaxonomyTree from "./comps/BrowserTaxonomyTree/BrowserTaxonomyTree";

function Browser() {
  return (
    <div>
      <InnerCard title="Taxonomy Tree">
        <BrowserTaxonomyTree />
      </InnerCard>
      <BrowserResultTable />
      1111111111111
    </div>
  );
}

export default Browser;
