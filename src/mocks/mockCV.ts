import { CV } from "../types/cv";

const mockCV: CV = {
  general: {
    firstName: "Dmytro",
    lastName: "Ivanchuk",
    positionTitle: "iOS Developer",
    email: "dmytroivanchuk1998@gmail.com",
    phone: "+380971821310",
  },
  educations: [
    {
      id: self.crypto.randomUUID(),
      position: 1,
      schoolName: "FOXMINDED SOFTWARE ENGINEERING BOOTCAMP",
      titleOfStudy: "iOS Mentoring",
      dateFromTo: "Jul 22, 2022 - Oct 10, 2022",
      location: "Kyiv, Ukraine",
    },
    {
      id: self.crypto.randomUUID(),
      position: 2,
      schoolName: "TARAS SHEVCHENKO NATIONAL UNIVERSITY OF KYIV",
      titleOfStudy: "Master's degree in Business and Exchange Activities",
      dateFromTo: "2020 - 2022",
      location: "Kyiv, Ukraine",
    },
    {
      id: self.crypto.randomUUID(),
      position: 3,
      schoolName: "TARAS SHEVCHENKO NATIONAL UNIVERSITY OF KYIV",
      titleOfStudy:
        "Bachelor's degree in Business, Trade and Exchange Activities",
      dateFromTo: "2016 - 2020",
      location: "Kyiv, Ukraine",
    },
  ],
  experiences: [
    {
      id: self.crypto.randomUUID(),
      position: 1,
      companyName: "JASPER APPS",
      positionTitle: "iOS Developer",
      dateFromTo: "Oct 14, 2022 – Present",
      location: "Lviv, Ukraine",
      description:
        "• Solo developer on Make A List — to-do list iOS application. Directly communicated with client and developed the following features from scratch: 1) Animated splash screen; 2) Main screen UI with editable and sortable list of to-do items; 3) Generating and printing PDF document of to-do items with support of dynamic number of pages, scaling, orientation and paper size; 4) Settings screen; 5) Appearance and text size settings with live preview. Stack used: SwiftUI, MVVM, Combine, CoreData, CoreText, UIKit, Storyboard, Git, Jira. • Worked on SimWall — iPad application, capable of constructing unique 2D close-quarters combat layouts, used by military instructors in UK and US to perform close combat training. Developed Target feature from scratch - functionality, allowing to adjust military target attributes in the sidebar, place it on layout, edit and save target information in settings. Stack used: UIKit, MVC, UserDefaults, Xib, Storyboard, Figma. • Worked on Pop Em and TimeTapper — games for watchOS with iOS deployment targets for displaying ads and leaderboard information. Implemented Google AdMob banners, fixed bugs and UI inconsistencies. Stack used: UIKit, WatchKit, MVC, AdMob, Storyboard, Git.",
    },
    {
      id: self.crypto.randomUUID(),
      position: 2,
      companyName: "LLC AGROCOMPANY PRYKARPATTYA UKRLANDFARMING COMPANY GROUP",
      positionTitle: "Economist",
      dateFromTo: "Jul 31, 2020 – Mar 25, 2022",
      location: "Ivano-Frankivsk, Ukraine",
      description:
        "• Main responsibilities: monthly analysis of expenses and use of all company transport, monthly payroll analysis, weekly accounts receivable analysis, communication with fuel suppliers and daily fuel consumption control. • Created MS Excel spreadsheets and templates for various data analyses, conducted in planning and economic department to increase overall clarity and reduce data processing time by half.",
    },
  ],
};

export default mockCV;
