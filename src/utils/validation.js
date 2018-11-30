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

  if (enabledBackgroundQuestionIds.includes(6) && !user.momEducation) {
    errors.momEducation = "Please select your mother's education.";
  }
  if (enabledBackgroundQuestionIds.includes(7) && !user.dadEducation) {
    errors.dadEducation = "Please select your father's education.";
  }
  if (enabledBackgroundQuestionIds.includes(8) && !user.job) {
    errors.job = "Please enter the job title of your current job.";
  }

  if (enabledBackgroundQuestionIds.includes(9) && !user.industry) {
    errors.industry = "Please enter the industry in which you work.";
  }

  if (enabledBackgroundQuestionIds.includes(10)) {
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

  if (enabledBackgroundQuestionIds.includes(11)) {
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

  if (enabledBackgroundQuestionIds.includes(12)) {
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
  }
  if (enabledBackgroundQuestionIds.includes(13)) {
    if (
      !user.wellbeing ||
      parseInt(user.wellbeing) < 0 ||
      parseInt(user.wellbeing) > 100
    ) {
      errors.wellbeing =
        "Please enter your self perceived level of well being from 0-100.";
    }
  }
  if (enabledBackgroundQuestionIds.includes(14)) {
    if (
      !user.health ||
      parseInt(user.health) < 0 ||
      parseInt(user.health) > 100
    ) {
      errors.health =
        "Please enter your self perceived health score from 0-100.";
    }
  }
  if (enabledBackgroundQuestionIds.includes(15)) {
    if (!user.act) {
      errors.act = "Please enter a valid ACT score.";
    }

    if (parseInt(user.act) < 0 || parseInt(user.act) > 36) {
      errors.act = "Please enter a valid ACT score.";
    }
  }
  if (enabledBackgroundQuestionIds.includes(16)) {
    if (!user.gpa) {
      errors.gpa = "Please enter your high school GPA.";
    }

    if (
      parseFloat(user.gpa).toFixed(2) < 0 ||
      parseFloat(user.gpa).toFixed(2) > 4.0
    ) {
      errors.gpa = "Please enter a standard GPA measure(between 0 and 4.0).";
    }
  }
  if (enabledBackgroundQuestionIds.includes(17)) {
    if (!user.sat) {
      errors.sat = "Please enter a valid SAT score.";
    }
    if (parseInt(user.sat) < 0 || parseInt(user.sat) > 1600) {
      errors.sat = "Please enter a valid SAT score.";
    }
  }
  if (enabledBackgroundQuestionIds.includes(18) && !user.income) {
    errors.income =
      "Please enter your income rounded to the nearest thousand dollars.";
  }
  if (enabledBackgroundQuestionIds.includes(19) && !user.houseIncome) {
    errors.houseIncome = "Please select the income of your household.";
  }
  if (enabledBackgroundQuestionIds.includes(20) && !user.parentHouseIncome) {
    errors.parentHouseIncome =
      "Please select the income of your parent's household.";
  }
  if (enabledBackgroundQuestionIds.includes(21) && !user.collegeMajor) {
    errors.collegeMajor =
      "Please enter your major if you attended or are attending college. If not applicable please put: N/A.";
  }
  if (enabledBackgroundQuestionIds.includes(22) && !user.demographic) {
    errors.demographic =
      "Please select the choice that best descibes the area you grew up in.";
  }

  return errors;
}
