import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  imports: [CommonModule, TranslatePipe],
  host: { class: "section-padding max-w-primary flex flex-col gap-16" },
})
export class ServicesComponent {
  /**
   * constructor
   */
  constructor() {}

  services = [
    {
      img: "1-implants-and-aligners",
      name: "implantsAndAligners",
      desc: "implantsAndAlignersInfo",
    },
    {
      img: "2-braces",
      name: "braces",
      desc: "bracesInfo",
    },
    {
      img: "3-veneers",
      name: "veneers",
      desc: "veneersInfo",
    },
    {
      img: "4-cosmetic-dentistry",
      name: "cosmeticDentistry",
      desc: "cosmeticDentistryInfo",
    },
    {
      img: "5-bleaching",
      name: "bleaching",
      desc: "bleachingInfo",
    },
    {
      img: "6-maxillary-fracture",
      name: "maxillaryFracture",
      desc: "maxillaryFractureInfo",
    },
    {
      img: "7-mandibular-fracture",
      name: "mandibularFracture",
      desc: "mandibularFractureInfo",
    },
    {
      img: "8-crown-and-bridge",
      name: "crownAndBridge",
      desc: "crownAndBridgeInfo",
    },
  ];

  otherServices = [
    "digitalDentalXray",
    "painlessToothExtraction",
    "bracesAndAligners",
    "implants",
    "rctCrownAndBridges",
    "denturesRpdCd",
    "scalingAndDentalJewellery",
    "dentalSurgeries",
  ];
}
