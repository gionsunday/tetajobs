import { getImagePath } from "../utils/getImagePath";

const blogPosts = [
  {
    id: 1,
    date: "October 7, 2019",
    title: "What to wear to a job interview",
    description:
      "Dress professionally and appropriately for the company culture. First impressions count, so keep it clean, simple, and confident.",
    image: getImagePath("blog1.jpg"),
    tag: "Interview",
    quote:
      "Confidence starts with being comfortable in your own skin—and your outfit.",
    contents: [
      {
        title: "General guidelines for what to wear to an interview",
        bodyText: [
          {
            title: "",
            paragraph: [
              "Dressing appropriately for an interview sets the tone for a strong first impression. Always aim for clean, neat, and professional attire that matches the company culture. When unsure, it's better to be slightly overdressed than underdressed.",
              "Consider the industry standard—corporate roles may expect suits, while creative fields may allow for more relaxed styles. No matter the position, ensure your outfit is well-fitted, free of wrinkles, and makes you feel confident.",
            ],
          },
        ],
      },

      {
        title: "Choosing your interview outfit: find out what is appropriate",
        bodyText: [
          {
            title: "",
            paragraph: [
              "Research the company's dress code before the interview day.",
              "Choose neutral colors and avoid flashy patterns or excessive accessories.",
              "Ensure your shoes are clean and match the tone of your outfit.",
              "Grooming and hygiene should be impeccable—clean nails, neat hair, and fresh breath.",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "When you dress with intention, it shows in your posture and energy. The right attire not only meets expectations but boosts your confidence. Always plan ahead and try on your outfit a day before to make necessary adjustments.",
    ],
  },
  {
    id: 2,
    date: "October 7, 2019",
    title: "Resume Writing Do's and Don'ts",
    description:
      "Highlight relevant experience, keep formatting consistent, and avoid common mistakes like typos or exaggerations.",
    image: getImagePath("blog2.jpg"),
    tag: "Interview",

    quote:
      "A strong resume tells your professional story clearly and confidently.",
    contents: [
      {
        title: "Resume Writing Do's and Don'ts",
        bodyText: [
          {
            title: "",
            paragraph: [
              "Your resume is more than just a document—it's your first impression, your elevator pitch, and your golden ticket to landing an interview. Whether you're a fresh graduate or a seasoned professional, knowing how to present yourself on paper can make all the difference. Here’s a practical guide to the do’s and don’ts of resume writing to help you stand out from the competition—for the right reasons.",
            ],
          },
        ],
      },
      {
        title: "Resume Writing Do’s",

        bodyText: [
          {
            title: "1. Tailor Your Resume for Each Role",
            paragraph: [
              "Customize your resume to align with the specific job description. Highlight the experience, skills, and achievements that are most relevant to the position you’re applying for.",
            ],
          },
          {
            title: "2. Keep It Concise and Focused",
            paragraph: [
              "Stick to one page if you’re early in your career or two pages if you have extensive experience. Employers typically spend less than 10 seconds scanning a resume, so make every word count.",
            ],
          },
          {
            title: "3. Use a Professional Format",
            paragraph: [
              "Choose a clean, easy-to-read layout with consistent fonts, bullet points, and spacing. Use headings like “Experience,” “Education,” and “Skills” to organize content.",
            ],
          },
          {
            title: "4. Quantify Achievements",
            paragraph: [
              "Use numbers and metrics to demonstrate your impact. For example:",

              "Increased social media engagement by 35%",

              "Managed a team of 10 and delivered 12 projects on schedule",
            ],
          },
          {
            title: "5. Proofread Thoroughly",
            paragraph: [
              "Spelling or grammatical errors can make you look careless. Always proofread your resume—or better yet, have someone else review it before submission",
            ],
          },
        ],
      },

      {
        title: "Resume Writing Don’ts",
        bodyText: [
          {
            title: "1. Don’t Include Irrelevant Information",
            paragraph: [
              "Leave out unrelated hobbies, outdated tech skills, or high school achievements if you’re past the early stages of your career.",
            ],
          },
          {
            title: "2. Avoid Using a One-Size-Fits-All Resume",
            paragraph: [
              "A generic resume won’t do you any favors. If it looks like it could be sent to any company in any industry, it’s probably not specific enough.",
            ],
          },
          {
            title: "3. Don’t Lie or Exaggerate",
            paragraph: [
              "It might be tempting to inflate your experience, but dishonesty can backfire—especially during interviews or background checks.",
            ],
          },
          {
            title: "4. Skip Unprofessional Email Addresses",
            paragraph: [
              "Use a clean and simple email, like firstname.lastname@email.com. Avoid anything that sounds unprofessional (e.g., cooldude2000@...).",
            ],
          },
          {
            title: "Don’t Rely on Fancy Designs",
            paragraph: [
              "While creative fields may allow more design freedom, overcomplicated formats or graphics can confuse ATS systems and hiring managers. Prioritize clarity and readability.",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "A strong resume tells your professional story clearly and confidently. Follow these do’s and don’ts to craft a document that’s polished, purposeful, and tailored for success. Remember, your resume won’t land the job for you—but it will open the door.",
    ],
  },

  {
    id: 3,
    date: "October 7, 2019",
    title: "How to ace your next virtual interview",
    description:
      "Ensure a quiet environment, dress the part, maintain eye contact through the camera, and prepare thoroughly in advance.",
    image: getImagePath("blog3.jpg"),

    tag: "Interview",
    quote:
      "It's not about being perfect—it's about being prepared and authentic.",

    contents: [
      {
        title: "How to Ace Your Next Virtual Interview",
        bodyText: [
          {
            title: "",
            paragraph: [
              "In today’s increasingly digital job market, virtual interviews have become the new norm. Whether you're meeting with a hiring manager over Zoom, Microsoft Teams, or Google Meet, how you present yourself virtually can be just as important as your qualifications. The good news? With a little preparation, you can make a lasting impression from the comfort of your home.",
            ],
          },
        ],
      },
      {
        title:
          "Here’s a step-by-step guide on how to ace your next virtual interview.",
        bodyText: [
          {
            title: "1. Test Your Tech in Advance",
            paragraph: [
              "Ensure your computer, camera, microphone, and internet connection are working properly. Test the platform you’ll be using (Zoom, Skype, etc.) to avoid technical glitches during the interview.",
            ],
          },
          {
            title: "2. Dress Professionally (Head to Toe)",
            paragraph: [
              "Even though you’re at home, dress as you would for an in-person interview. This means wearing professional attire from head to toe. It not only shows respect for the interviewer but also helps you get into the right mindset.",
            ],
          },
          {
            title: " 3. Set Up a Clean, Distraction-Free Background",
            paragraph: [
              "Choose a quiet, well-lit space for your interview. Make sure the background is tidy and free of distractions. A plain wall or a bookshelf works well. Avoid busy patterns or clutter that could divert attention.",
            ],
          },
          {
            title: "4. Practice Strong Virtual Body Language",
            paragraph: [
              "Maintain eye contact by looking at the camera, not the screen. Sit up straight, smile, and nod to show engagement. Avoid fidgeting or looking away frequently, as this can be distracting.",
            ],
          },
          {
            title: "5. Prepare Like Any Other Interview",
            paragraph: [
              "Research the company, review the job description, and prepare answers to common interview questions. Have a few questions ready to ask the interviewer as well. This shows your interest and helps you stand out.",
            ],
          },
          {
            title: "6. Have Notes—But Use Them Wisely",
            paragraph: [
              "It’s okay to have notes or a copy of your resume nearby for reference. However, avoid reading directly from them. Use them as a guide to keep the conversation flowing naturally.",
            ],
          },
          {
            title: "7. Follow Up Professionally",
            paragraph: [
              "After the interview, send a thank-you email to express your appreciation for the opportunity. Mention something specific from the conversation to make it personal.",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "Virtual interviews are here to stay, and knowing how to navigate them can set you apart. With the right mindset, environment, and preparation, you can turn your next virtual interview into a confident, career-changing moment.",
    ],
  },
];

export default blogPosts;
