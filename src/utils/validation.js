export function validateBackground(background, enabledBackgroundQuestionIds) {
  const errors = {};
  if (enabledBackgroundQuestionIds.includes(1)) {
    if (!background.age) {
      errors.age = "Please enter your age.";
    }

    if (parseInt(background.age) < 18 || parseInt(background.age) > 80) {
      errors.age = "Sorry, you need to be between 18 and 80 to participate.";
    }
  }

  if (enabledBackgroundQuestionIds.includes(2) && !background.race) {
    errors.race = "Please select your race.";
  }

  if (enabledBackgroundQuestionIds.includes(3) && !background.ethnicity) {
    errors.ethnicity = "Please select your ethnicity.";
  }

  if (enabledBackgroundQuestionIds.includes(4) && !background.gender) {
    errors.gender = "Please select your gender.";
  }

  if (enabledBackgroundQuestionIds.includes(5) && !background.education) {
    errors.education = "Please select your education.";
  }

  // TODO: Should this only be allowed to be a number?
  // Depends on IRB policy. May have to switch to ranges.
  // leave as is for now per Jeff.
  if (enabledBackgroundQuestionIds.includes(6) && !background.income) {
    errors.income =
      "Please enter your annual income in dollars, rounded to the nearest thousand dollars.";
  }

  // TODO: Should these be dropdowns? Single input?
  if (enabledBackgroundQuestionIds.includes(7) && !background.industry) {
    errors.industry = "Please enter the industry in which you work.";
  }

  if (enabledBackgroundQuestionIds.includes(8)) {
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
  }

  if (enabledBackgroundQuestionIds.includes(9)) {
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
  }

  if (enabledBackgroundQuestionIds.includes(10)) {
    if (!background.satisfactionDesiredData1) {
      errors.satisfactionDesiredData1 =
        "Please enter the most important factor.";
    }

    if (!background.satisfactionDesiredData2) {
      errors.satisfactionDesiredData2 =
        "Please enter the second most important factor.";
    }

    if (!background.satisfactionDesiredData3) {
      errors.satisfactionDesiredData3 =
        "Please enter the third most important factor.";
    }
  }

  return errors;
}

export function validateLogin(workerId, email, acceptedTerms) {
  const errors = {};

  if (!workerId && !email) {
    errors.login =
      "Please enter either your MTurk Worker ID or your email to continue.";
  }

  if (!acceptedTerms) {
    errors.acceptedTerms = "Please accept the terms to continue.";
  }
  return errors;
}
