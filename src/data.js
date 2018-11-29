export const scenarios = [
  {
    scenarioId: 1,
    topic: "Income",
    options: [
      "--Below $5K",
      "----$5K-$6K",
      "----$7K-$9K",
      "--$10K-$11K",
      "--$12K-$14K",
      "--$15K-$19K",
      "--$20K-$24K",
      "--$25K-$29K",
      "--$30K-$34K",
      "--$35K-$39K",
      "--$40K-$49K",
      "--$50K-$59K",
      "--$60K-$74K",
      "--$75K-$99K",
      "$100K-$149K",
      "-----$150K+"
    ],
    bonusQuestion:
      "Predict this person's yearly income based on the following profile information:",
    totalTokens: 30
  },
  {
    scenarioId: 2,
    topic: "Subjective Well Being",
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

export const backgroundQuestions = [
  { id: 1, scenarioIds: [1, 2] },
  { id: 2, scenarioIds: [1, 2] },
  { id: 3, scenarioIds: [1, 2] },
  { id: 4, scenarioIds: [1, 2] },
  { id: 5, scenarioIds: [1, 2] },
  { id: 6, scenarioIds: [1, 2] },
  { id: 7, scenarioIds: [1, 2] },
  { id: 8, scenarioIds: [1, 2] },
  { id: 9, scenarioIds: [1, 2] },
  { id: 10, scenarioIds: [1, 2] },
  { id: 11, scenarioIds: [] },
  { id: 12, scenarioIds: [] },
  { id: 13, scenarioIds: [1, 2] },
  { id: 13, scenarioIds: [1, 2] },
  { id: 14, scenarioIds: [1, 2] },
  { id: 15, scenarioIds: [1, 2] },
  { id: 16, scenarioIds: [1, 2] },
  { id: 17, scenarioIds: [1, 2] },
  { id: 18, scenarioIds: [1, 2] },
  { id: 19, scenarioIds: [1, 2] },
  { id: 20, scenarioIds: [1, 2] },
  { id: 21, scenarioIds: [1, 2] },
  { id: 22, scenarioIds: [1, 2] }
];

export const profiles = [
  // Note how this is the same person as above, but with more info provided.
  // The saveWagerButtonLabel property is an override. If it's not provided, the default label will be utilized for that profile.
  // saveWagerButtonLabel: "Save wager to see more info" does this
  // JEFF: I've adopted the convention of putting a 7 in front of the number
  //       of the original profile (71 represents the full-info version of 1), since we don't exceed 60 profiles.
  {
    profileId: 1,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 18,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 71,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 18
  },
  {
    profileId: 50,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 37,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 750,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 37
  },
  {
    profileId: 10,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 710,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 55
  },
  {
    profileId: 27,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 33
  },
  {
    profileId: 29,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 729,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 21,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 721,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 21
  },
  {
    profileId: 32,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 61,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 732,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 61
  },
  {
    profileId: 42,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 42
  },
  {
    profileId: 53,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 77,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 25
  },
  {
    profileId: 2,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 59,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 72,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 59
  },
  {
    profileId: 19,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 24,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 719,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 24
  },
  {
    profileId: 31,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 25,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 731,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 25
  },
  {
    profileId: 56,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 72
  },
  {
    profileId: 18,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 32,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 718,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 32
  },
  {
    profileId: 41,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 33
  },
  {
    profileId: 20,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 38,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 720,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 38
  },
  {
    profileId: 14,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 37
  },
  {
    profileId: 3,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 73,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 19
  },
  {
    profileId: 39,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 32
  },
  {
    profileId: 25,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 30
  },
  {
    profileId: 40,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 40
  },
  {
    profileId: 6,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 53,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 76,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 53
  },
  {
    profileId: 28,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 45
  },
  {
    profileId: 9,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 28,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 79,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 28
  },

  {
    profileId: 13,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 27
  },
  {
    profileId: 38,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 58,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 738,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 58
  },
  {
    profileId: 48,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 47,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 748,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 47
  },
  {
    profileId: 16,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 51,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 716,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 51
  },
  {
    profileId: 29,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 729,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 45,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 745,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 18
  },
  {
    profileId: 30,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 48,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 730,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 48
  },
  {
    profileId: 22,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 722,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 34
  },
  {
    profileId: 4,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 33,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 74,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 33
  },
  {
    profileId: 33,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 26,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 733,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 26
  },
  {
    profileId: 35,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 21,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 735,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 21
  },
  {
    profileId: 49,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 26,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 749,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 26
  },
  {
    profileId: 12,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 39
  },
  {
    profileId: 55,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 34
  },
  {
    profileId: 44,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 62,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 744,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 62
  },
  {
    profileId: 8,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 62,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 78,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Female",
    age: 62
  },
  {
    profileId: 24,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Female",
    age: 36,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 724,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 36
  },
  {
    profileId: 15,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 715,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 16
  },
  {
    profileId: 36,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 736,
    scenarioIds: [1, 2],
    education: "Some College (2-yr. Associates Degree or less)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 34
  },
  {
    profileId: 46,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 57,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 746,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 57
  },
  {
    profileId: 11,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 27
  },
  {
    profileId: 37,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 24,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 737,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Male",
    age: 24
  },
  {
    profileId: 5,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 23,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 75,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "Black",
    gender: "Female",
    age: 23
  },
  {
    profileId: 17,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 717,
    scenarioIds: [1, 2],
    education: "Some High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 17
  },
  {
    profileId: 47,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 747,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 21
  },
  {
    profileId: 54,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 54
  },
  {
    profileId: 34,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "Male",
    age: 44,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 734,
    scenarioIds: [1, 2],
    education: "High School Graduate (Diploma or Equivalent)",
    experience: "More than 10 years",
    race: "Black",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 44
  },
  {
    profileId: 23,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "UNKNOWN - SAVE WAGER TO REVEAL",
    age: 30,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 723,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Female",
    age: 30
  },
  {
    profileId: 51,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 25,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 751,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 25
  },
  {
    profileId: 43,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: "UNKNOWN - SAVE WAGER TO REVEAL",
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 743,
    scenarioIds: [1, 2],
    education: "Less than High School",
    experience: "Less than 10 years",
    race: "White",
    gender: "Male",
    age: 16
  },
  {
    profileId: 26,
    scenarioIds: [1, 2],
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
    scenarioIds: [1, 2],
    education:
      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
    experience: "More than 10 years",
    race: "White",
    gender: "Female",
    age: 59
  },
  {
    profileId: 52,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "UNKNOWN - SAVE WAGER TO REVEAL",
    gender: "Male",
    age: 34,
    saveWagerButtonLabel: "Save initial wager to see more info and update"
  },
  {
    profileId: 752,
    scenarioIds: [1, 2],
    education: "Bachelor's Degree (4-yr. College Graduate)",
    experience: "More than 10 years",
    race: "White",
    gender: "Male",
    age: 34
  }
];
