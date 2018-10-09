export function validateLogin(user, enabledBackgroundQuestionIds) {
  const errors = {};

  if (!user.workerId && !user.email) {
    errors.login =
      "Please enter either your MTurk Worker ID or your email to continue.";
  }

  if (!user.acceptedTerms) {
    errors.acceptedTerms = "Please accept the terms to continue.";
  }

  if (enabledBackgroundQuestionIds.includes(1)) {
    if (!user.age) {
      errors.age = "Please enter your age.";
    }

    if (parseInt(user.age) < 18 || parseInt(user.age) > 80) {
      errors.age = "Sorry, you need to be between 18 and 80 to participate.";
    }
  }

  if (enabledBackgroundQuestionIds.includes(2) && !user.race) {
    errors.race = "Please select your race.";
  }

  if (enabledBackgroundQuestionIds.includes(3) && !user.ethnicity) {
    errors.ethnicity = "Please select your ethnicity.";
  }

  if (enabledBackgroundQuestionIds.includes(4) && !user.gender) {
    errors.gender = "Please select your gender.";
  }

  if (enabledBackgroundQuestionIds.includes(5) && !user.education) {
    errors.education = "Please select your education.";
  }

  // TODO: Should this only be allowed to be a number?
  // Depends on IRB policy. May have to switch to ranges.
  // leave as is for now per Jeff.
  if (enabledBackgroundQuestionIds.includes(6) && !user.income) {
    errors.income =
      "Please enter your annual income in dollars, rounded to the nearest thousand dollars.";
  }

  // TODO: Should these be dropdowns? Single input?
  if (enabledBackgroundQuestionIds.includes(7) && !user.industry) {
    errors.industry = "Please enter the industry in which you work.";
  }

  if (enabledBackgroundQuestionIds.includes(8)) {
    if (
      !user.yearsJobExperience ||
      parseInt(user.yearsJobExperience) < 0 ||
      parseInt(user.yearsJobExperience) > 80
    ) {
      errors.yearsJobExperience =
        "Please enter the number of years of experience you have in your current job.";
    }

    if (parseInt(user.yearsJobExperience) > parseInt(user.age)) {
      errors.yearsJobExperience =
        "Your years of job experience cannot exceed your age.";
    }
  }

  if (enabledBackgroundQuestionIds.includes(9)) {
    if (!user.earningsDesiredData1) {
      errors.earningsDesiredData1 = "Please enter the most important factor.";
    }

    if (!user.earningsDesiredData2) {
      errors.earningsDesiredData2 =
        "Please enter the second most important factor.";
    }

    if (!user.earningsDesiredData3) {
      errors.earningsDesiredData3 =
        "Please enter the third most important factor.";
    }
  }

  if (enabledBackgroundQuestionIds.includes(10)) {
    if (!user.satisfactionDesiredData1) {
      errors.satisfactionDesiredData1 =
        "Please enter the most important factor.";
    }

    if (!user.satisfactionDesiredData2) {
      errors.satisfactionDesiredData2 =
        "Please enter the second most important factor.";
    }

    if (!user.satisfactionDesiredData3) {
      errors.satisfactionDesiredData3 =
        "Please enter the third most important factor.";
    }
    
    
    if (enabledBackgroundQuestionIds.includes(11)) {
      if (
      !user.wellbeing ||
      parseInt(user.wellbeing) < 0 ||
      parseInt(user.wellbeing) > 100
    ) {
      errors.wellbeing =
        "Please enter your self perceived level of well being.";
    }
    }
  }

  return errors;
}
