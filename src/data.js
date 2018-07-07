export const scenarios = [
  {
    scenarioId: 1,
    topic: "Income",
    options: ["$50,000", "$75,000", "$100,000", "$150,000", "$200,000"],
    bonusQuestion: "guess this person's exact income.",
    // TODO: Are total tokens tied to a scenario?
    totalTokens: 30
  },
  {
    scenarioId: 2,
    topic: "Education",
    options: ["High School", "Associates", "Bachelors", "Masters", "Doctorate"],
    bonusQuestion: "guess the high education received by this person.",
    totalTokens: 30
  }
];

export const profiles = [
  {
    profileId: 1,
    age: 42,
    weight: "200 pounds",
    race: "White",
    saveWagerButtonLabel: "Save wager to see more info"
  },
  // Note how this is the same person as above, but with more info provided.
  // The saveWagerButtonLabel property is an override. If it's not provided, the default label will be utilized for that profile.
  {
    profileId: 11,
    age: 42,
    weight: "200 pounds",
    race: "White",
    industry: "Software",
    education: "Masters"
  },
  {
    profileId: 2,
    age: 22,
    weight: "150 pounds",
    race: "Black",
    industry: "Architecture",
    education: "Doctorate"
  },
  {
    profileId: 3,
    age: 32,
    weight: "170 pounds",
    race: "Asian",
    industry: "Mechanical Engineering",
    education: "High School"
  }
];
