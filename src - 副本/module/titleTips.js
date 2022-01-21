/**
 * 储存网页上用到的各种tooltip的内容，常与TitleWithTip搭配使用
 */
const titleTips = {
  BioProjectTip: function () {
    return <span>BioProject Accession</span>;
  },
  // EvidenceTypeTip: function (props) {
  //     return (
  //         <div style={{fontSize: "14px"}} >
  //             <div><span className="rps-theme-color-sc" style={{filter: "brightness(1.3)"}} >Reviewed</span>: Experimentally verified LLPS-related RNAs.</div>
  //             <div><span className="rps-theme-color-sc" style={{filter: "brightness(1.3)"}} >High-throughput</span>: LLPS-related RNAs that are enriched in phased-separated condensates, indicated by high-throughput RNA sequencing data.</div>
  //             <div><span className="rps-theme-color-sc" style={{filter: "brightness(1.3)"}} >Predicted</span>: LLPS-related RNAs that interact with the experimentally verified LLPS-related RNAs or proteins.</div>
  //         </div>
  //     );
  // },
  // RPSIdTip: function (props) {
  //     return (
  //         <span>LLPS-related RNA ID</span>
  //     );
  // },
  // LLPSIdTip: function (props) {
  //     return (
  //         <span>LLPS process ID</span>
  //     );
  // },
  // LogFCTip: function (props) {
  //     return (
  //         <span>log2(treatment group expression)-log2(control group expression)</span>
  //     );
  // },
  // AdjustPValueTip: function (props) {
  //     return (
  //         <span>P-value adjusted by FDR.</span>
  //     );
  // },
  // InteractedLLPSRNATip: function (props) {
  //     return (
  //         <span>The interacted LLPS-related RNAs with experimental evidence.</span>
  //     );
  // },
  // InteractedLLPSProteinTip: function (props) {
  //     return (
  //         <span>The interacted LLPS-related proteins with experimental evidence.</span>
  //     );
  // },
  // VariantsTip: function (props) {
  //     return (
  //         <span>Disease-associated or cancer-associated variants derived from ClinVar, DisGeNET, COSMIC, TCGC and ICGC.</span>
  //     );
  // },
  // DiseaseTip: function (props) {
  //     return (
  //         <span>Whether the RNA is associated with a disease or cancer?</span>
  //     );
  // }
};

export default titleTips;
