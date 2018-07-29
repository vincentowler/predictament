export const scenarios = [
  {
    scenarioId: 1,
    topic: "Income",
    options: [
      "$50,000",
      "$55,000",
      "$60,000",
      "$65,000",
      "$70,000",
      "$75,000",
      "$80,000",
      "$85,000",
      "$90,000",
      "$95,000",
      "$100,000",
      "$150,000",
      "$200,000"
    ],
    bonusQuestion:
      "Predict this person's yearly income based on the following profile information:",
    // TODO: Are total tokens tied to a scenario?
    totalTokens: 30
  },
  {
    scenarioId: 2,
    topic: "SubjectiveWellBeing",
    options: [
      "0-10",
      "11-20",
      "21-30",
      "31-40",
      "41-50",
      "51-60",
      "61-70",
      "71-80",
      "81-90",
      "90-100"
    ],
    bonusQuestion:
      "Guess what this person reported as their overall well-being score on a scale from 0 (lowest well-being possible, extremely unhappy) to 100 (highest well-being possible, extremely happy).",
    totalTokens: 30
  }
];

export const profiles = [
  // Note how this is the same person as above, but with more info provided.
  // The saveWagerButtonLabel property is an override. If it's not provided, the default label will be utilized for that profile.
  // saveWagerButtonLabel: "Save wager to see more info" does this
  // JEFF: I've adopted the convention of putting a 7 in front of the number
  //       of the original profile (71 represents the full-info version of 1), since we don't exceed 60 profiles.
  {
    profileId: 1,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 18,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 71,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 18
  },
  {
    profileId: 50,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 37,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 750,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 37
  },
  {
    profileId: 10,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 710,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 55
  },
  {
    profileId: 27,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 33,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 727,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 33
  },
  {
    profileId: 29,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 729,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 21,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 721,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 21
  },
  {
    profileId: 32,
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 61,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 732,
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 61
  },
  {
    profileId: 42,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 42,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 742,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 42
  },
  {
    profileId: 53,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 30,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 753,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 30,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 7,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 77,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 25
  },
  {
    profileId: 2,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 59,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 72,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 59
  },
  {
    profileId: 19,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 24,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 719,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 24
  },
  {
    profileId: 31,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 25,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 731,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 25
  },
  {
    profileId: 56,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 756,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 72
  },
  {
    profileId: 18,
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 32,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 718,
    education: "Some High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 32
  },
  {
    profileId: 41,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 33,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 741,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 33
  },
  {
    profileId: 20,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 38,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 720,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 38
  },
  {
    profileId: 14,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 37,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 714,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 37
  },
  {
    profileId: 3,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 73,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 19
  },
  {
    profileId: 39,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 32,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 739,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 32
  },
  {
    profileId: 25,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 30,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 725,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 30
  },
  {
    profileId: 40,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 40,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 740,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 40
  },
  {
    profileId: 6,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 53,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 76,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 53
  },
  {
    profileId: 28,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 45,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 728,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 45
  },
  {
    profileId: 9,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 28,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 79,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 28
  },

  {
    profileId: 13,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 27,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 713,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 27
  },
  {
    profileId: 38,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 58,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 738,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 58
  },
  {
    profileId: 48,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 47,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 748,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 47
  },
  {
    profileId: 16,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 51,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 716,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 51
  },
  {
    profileId: 29,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 729,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 45,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 745,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 18
  },
  {
    profileId: 30,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 48,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 730,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 48
  },
  {
    profileId: 22,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 722,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 34
  },
  {
    profileId: 4,
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 33,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 74,
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 33
  },
  {
    profileId: 33,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 26,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 733,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 26
  },
  {
    profileId: 35,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 735,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 49,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 26,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 749,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 26
  },
  {
    profileId: 12,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 39,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 712,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 39
  },
  {
    profileId: 55,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 755,
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 34
  },
  {
    profileId: 44,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 62,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 744,
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 62
  },
  {
    profileId: 8,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 62,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 78,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 62
  },
  {
    profileId: 24,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 36,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 724,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 36
  },
  {
    profileId: 15,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 715,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 16
  },
  {
    profileId: 36,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 736,
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 34
  },
  {
    profileId: 46,
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 57,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 746,
    education: "Some High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 57
  },
  {
    profileId: 11,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 27,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 711,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 27
  },
  {
    profileId: 37,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 24,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 737,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 24
  },
  {
    profileId: 5,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 23,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 75,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 23
  },
  {
    profileId: 17,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 717,
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 17
  },
  {
    profileId: 47,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 747,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 21
  },
  {
    profileId: 54,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 54,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 754,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 54
  },
  {
    profileId: 34,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 44,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 734,
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 44
  },
  {
    profileId: 23,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 30,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 723,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 30
  },
  {
    profileId: 51,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 25,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 751,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 25
  },
  {
    profileId: 43,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 743,
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 16
  },
  {
    profileId: 26,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 59,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 726,
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 59
  },
  {
    profileId: 52,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 752,
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 34
  }
];
