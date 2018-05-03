import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.creatHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.createPageSectionWaypoints();
  }

  creatHeaderWaypoint() {
    let that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function (direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints(){
    this.pageSections.each(function () {
      let currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function () {
          let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          $(matchingHeaderLink).addClass("is-current-link");
        }
      });
    });
  }
}

export default StickyHeader;