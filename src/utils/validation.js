export function validateBackground(background) {
  const errors = {};
  if (!background.age) {
    errors.age = "Please enter your age.";
  }

  if (parseInt(background.age) < 18 || parseInt(background.age) > 80) {
    errors.age = "Sorry, you need to be between 18 and 80 to participate.";
  }

  if (!background.race) {
    errors.race = "Please select your race.";
  }

  if (!background.ethnicity) {
    errors.ethnicity = "Please select your ethnicity.";
  }

  if (!background.gender) {
    errors.gender = "Please select your gender.";
  }

  if (!background.education) {
    errors.education = "Please select your education.";
  }

  // TODO: Should this only be allowed to be a number?
  if (!background.income) {
    errors.income = "Please enter your annual income.";
  }

  // TODO: Should these be dropdowns? Single input?
  if (!background.industry) {
    errors.industry = "Please enter the industry in which you work.";
  }

  if (
    !background.yearsJobExperience ||
    parseInt(background.yearsJobExperience) < 0 ||
    parseInt(background.yearsJobExperience) > 80
  ) {
    errors.yearsJobExperience =
      "Please enter the number of years of experience you have in your current job.";
  }

  if (parseInt(background.yearsJobExperience) > parseInt(background.age)) {
    errors.yearsJobExperience =
      "Your years of job experience cannot exceed your age.";
  }

  // TODO: Require entering three?
  if (!background.earningsDesiredData1) {
    errors.earningsDesiredData1 = "Please enter the most important factor.";
  }

  if (!background.earningsDesiredData2) {
    errors.earningsDesiredData2 =
      "Please enter the second most important factor.";
  }

  if (!background.earningsDesiredData3) {
    errors.earningsDesiredData3 =
      "Please enter the third most important factor.";
  }

  // TODO: Require entering three?
  if (!background.satisfactionDesiredData1) {
    errors.satisfactionDesiredData1 = "Please enter the most important factor.";
  }

  if (!background.satisfactionDesiredData2) {
    errors.satisfactionDesiredData2 =
      "Please enter the second most important factor.";
  }

  if (!background.satisfactionDesiredData3) {
    errors.satisfactionDesiredData3 =
      "Please enter the third most important factor.";
  }

  return errors;
}

export function validateLogin(workerId, acceptedTerms) {
  const errors = {};

  if (!workerId) {
    errors.workerId = "Please enter your MTurk Worker ID.";
  }

  if (!acceptedTerms) {
    errors.acceptedTerms = "Please accept the terms to continue.";
  }
  return errors;
}
