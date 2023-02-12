import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

// StylesManager.applyTheme("defaultV2");

function doOnCurrentPageChanged(survey) {
  //   var survey = window.navSurvey;
  document.getElementById("pageSelector").value = survey.currentPageNo;
  document.getElementById("surveyPrev").style.display = !survey.isFirstPage
    ? "inline"
    : "none";
  document.getElementById("surveyNext").style.display = !survey.isLastPage
    ? "inline"
    : "none";
  document.getElementById("surveyComplete").style.display = survey.isLastPage
    ? "inline"
    : "none";
  document.getElementById("surveyProgress").innerText =
    "Page " +
    (survey.currentPageNo + 1) +
    " of " +
    survey.visiblePageCount +
    ".";
  if (document.getElementById("surveyPageNo"))
    document.getElementById("surveyPageNo").value = survey.currentPageNo;
}
function setupPageSelector(survey) {
  window.navSurvey = survey;
  var selector = document.getElementById("pageSelector");
  for (var i = 0; i < survey.visiblePages.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = "Page " + (i + 1);
    selector.add(option);
  }
}
function SurveyComponent() {
  const survey = new Model(json);
  survey.showTitle = false;
  setupPageSelector(survey);
  doOnCurrentPageChanged(survey);
  survey.showTitle = false;

  return (
    <Survey model={survey} onCurrentPageChanged={doOnCurrentPageChanged} />
  );
}
export default SurveyComponent;
