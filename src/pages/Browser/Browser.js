import React from "react";
import InnerCard from "../components/InnerCard/InnerCard";
import BrowserResultTable from "./comps/BrowserResultTable/BrowserResultTable";
import BrowserTaxonomyTree from "./comps/BrowserTaxonomyTree/BrowserTaxonomyTree";

function Browser() {
  return (
    <div>
      <InnerCard title="Taxonomy Tree"></InnerCard>
      <BrowserResultTable />
    </div>
  );
}

export default Browser;
